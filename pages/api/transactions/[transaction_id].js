import Database from 'sqlite3';

const db = new Database.Database('./database.sqlite');

const isValidUUID = (uuid) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

export default async function handler(req, res) {
  const { transaction_id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!transaction_id || !isValidUUID(transaction_id)) {
    return res.status(400).json({ error: 'Invalid transaction_id format' });
  }

  try {
    const transaction = await new Promise((resolve, reject) => {
      db.get(
        'SELECT transaction_id, account_id, amount, created_at FROM transactions WHERE transaction_id = ?',
        [transaction_id],
        (err, row) => {
          if (err) reject(err);
          else if (!row) reject(new Error('Transaction not found'));
          else resolve(row);
        }
      );
    });

    res.status(200).json(transaction);
  } catch (error) {
    if (error.message === 'Transaction not found') {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    console.error('Error getting transaction:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}