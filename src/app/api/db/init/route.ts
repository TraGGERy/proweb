import { NextResponse } from 'next/server';
import initializeDatabase from '@/lib/db-init';

// API route to initialize the database
export async function GET() {
  try {
    await initializeDatabase();
    return NextResponse.json({ success: true, message: 'Database initialized successfully' });
  } catch (error) {
    console.error('Error in database initialization route:', error);
    return NextResponse.json(
      { success: false, message: 'Database initialization failed', error: String(error) },
      { status: 500 }
    );
  }
}