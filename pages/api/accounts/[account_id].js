import Database from 'sqlite3';

const db = new Database.Database('./database.sqlite');

const isValidUUID = (uuid) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

export default async function handler(req, res) {
  const { account_id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!account_id || !isValidUUID(account_id)) {
    return res.status(400).json({ error: 'Invalid account_id format' });
  }

  try {
    // Check if account exists in accounts table
    const accountExists = await new Promise((resolve, reject) => {
      db.get(
        'SELECT 1 FROM accounts WHERE account_id = ? LIMIT 1',
        [account_id],
        (err, row) => {
          if (err) reject(err);
          else resolve(!!row);
        }
      );
    });

    if (!accountExists) {
      return res.status(404).json({ error: 'Account not found' });
    }

    // Get balance from transactions
    const result = await new Promise((resolve, reject) => {
      db.get(
        'SELECT SUM(amount) as balance FROM transactions WHERE account_id = ?',
        [account_id],
        (err, row) => {
          if (err) reject(err);
          else resolve(row);
        }
      );
    });

    const balance = result && result.balance !== null ? result.balance : 0;

    res.status(200).json({
      account_id,
      balance
    });
  } catch (error) {
    console.error('Error getting account:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}