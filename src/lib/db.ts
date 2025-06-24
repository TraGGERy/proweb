import { neon, neonConfig } from '@neondatabase/serverless';
import { Pool } from 'pg';

// Configure neon to use WebSockets for serverless environments
neonConfig.webSocketConstructor = globalThis.WebSocket;
neonConfig.useSecureWebSocket = true;

// Get database connection string from environment variables
const connectionString = process.env.NEON_DATABASE_URL;

if (!connectionString) {
  console.error('NEON_DATABASE_URL environment variable is not set');
}

// Create a SQL query executor using the neon function
export const sql = connectionString ? neon(connectionString) : () => {
  throw new Error('Database connection string is not configured');
};

// Create a connection pool for more complex operations
let pool: Pool | null = null;

export const getPool = () => {
  if (!connectionString) {
    throw new Error('Database connection string is not configured');
  }
  
  if (!pool) {
    pool = new Pool({ connectionString });
  }
  
  return pool;
};

// Helper function to execute queries with the pool
export async function query(text: string, params?: (string | number | boolean)[]) {
  const pool = getPool();
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}