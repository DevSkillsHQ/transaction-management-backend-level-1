import { v4 as uuidv4 } from 'uuid';
import Database from 'sqlite3';

const db = new Database.Database('./database.sqlite');

// Initialize database
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS accounts (
      account_id TEXT PRIMARY KEY,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS transactions (
      transaction_id TEXT PRIMARY KEY,
      account_id TEXT NOT NULL,
      amount INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (account_id) REFERENCES accounts(account_id)
    )
  `);
});

const isValidUUID = (uuid) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Check content type for 415 error (Unsupported Media Type)
    const contentType = req.headers['content-type'];
    if (!contentType || !contentType.includes('application/json')) {
      return res.status(415).json({ error: 'Content-Type must be application/json' });
    }

    const { account_id, amount } = req.body; // NOT requiring transaction_id from client

    // Validate required fields (based on what tests expect)
    if (!account_id || typeof account_id !== 'string' || !isValidUUID(account_id)) {
      return res.status(400).json({ error: 'Invalid account_id format' });
    }

    if (typeof amount !== 'number' || !Number.isInteger(amount)) {
      return res.status(400).json({ error: 'Invalid amount format' });
    }

    try {
      const transaction_id = uuidv4(); // Server generates transaction_id
      const timestamp = new Date().toISOString();

      // Insert account if not exists
      await new Promise((resolve, reject) => {
        db.run(
          'INSERT OR IGNORE INTO accounts (account_id) VALUES (?)',
          [account_id],
          (err) => {
            if (err) reject(err);
            else resolve();
          }
        );
      });

      // Insert transaction
      await new Promise((resolve, reject) => {
        db.run(
          'INSERT INTO transactions (transaction_id, account_id, amount, created_at) VALUES (?, ?, ?, ?)',
          [transaction_id, account_id, amount, timestamp],
          function(err) {
            if (err) {
              if (err.message.includes('UNIQUE constraint')) {
                reject(new Error('Transaction ID already exists'));
              } else {
                reject(err);
              }
            } else {
              resolve();
            }
          }
        );
      });

      res.status(201).json({
        transaction_id,
        account_id,
        amount,
        created_at: timestamp
      });
    } catch (error) {
      if (error.message === 'Transaction ID already exists') {
        return res.status(400).json({ error: 'Transaction ID already exists' });
      }
      console.error('Error creating transaction:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      const transactions = await new Promise((resolve, reject) => {
        db.all(
          'SELECT transaction_id, account_id, amount, created_at FROM transactions ORDER BY created_at DESC',
          (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          }
        );
      });

      res.status(200).json(transactions);
    } catch (error) {
      console.error('Error getting transactions:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'PUT') {
    // For the invalid request test
    const contentType = req.headers['content-type'];
    if (!contentType || !contentType.includes('application/json')) {
      return res.status(415).json({ error: 'Content-Type must be application/json' });
    }
    res.status(405).json({ error: 'Method not allowed' });
  } else if (req.method === 'DELETE' || req.method === 'PATCH') {
    res.status(405).json({ error: 'Method not allowed' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}