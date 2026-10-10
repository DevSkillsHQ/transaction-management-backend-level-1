export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Transaction Management API</h1>
      <p>This is a Next.js backend API for managing financial transactions.</p>
      <ul>
        <li>GET /api/ping - Health check</li>
        <li>POST /api/transactions - Create transaction</li>
        <li>GET /api/transactions - Get all transactions</li>
        <li>GET /api/transactions/{`{transaction_id}`} - Get specific transaction</li>
        <li>GET /api/accounts/{`{account_id}`} - Get account balance</li>
      </ul>
    </div>
  );
}