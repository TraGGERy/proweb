import { NextResponse } from 'next/server';
import { seedAllData } from '@/lib/seed-data';

// API route to seed the database with initial data
export async function GET() {
  try {
    await seedAllData();
    return NextResponse.json({ success: true, message: 'Database seeded successfully' });
  } catch (error) {
    console.error('Error in database seeding route:', error);
    return NextResponse.json(
      { success: false, message: 'Database seeding failed', error: String(error) },
      { status: 500 }
    );
  }
}