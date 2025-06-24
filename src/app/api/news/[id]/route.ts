import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET handler to fetch a specific news article by ID
export async function GET(request: Request, context: { params: { id: string } }) {
  const { params } = context;
  try {
    const id = params.id;
    
    // Validate ID
    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'Invalid article ID' },
        { status: 400 }
      );
    }
    
    // Fetch the article
    const result = await query('SELECT * FROM news_articles WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching news article:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news article', details: String(error) },
      { status: 500 }
    );
  }
}

// PUT handler to update a specific news article
export async function PUT(request: Request, context: { params: { id: string } }) {
  const { params } = context;
  try {
    const id = params.id;
    const body = await request.json();
    
    // Validate ID
    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'Invalid article ID' },
        { status: 400 }
      );
    }
    
    // Check if article exists
    const checkResult = await query('SELECT id FROM news_articles WHERE id = $1', [id]);
    if (checkResult.rows.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    
    // Build update query dynamically based on provided fields
    const updateFields: string[] = [];
    const queryParams: (string | number | boolean)[] = [];
    let paramCounter = 1;
    
    // Fields that can be updated
    const allowedFields = ['title', 'excerpt', 'content', 'date', 'author', 'category', 'image', 'featured'];
    
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateFields.push(`${field} = $${paramCounter}`);
        queryParams.push(body[field]);
        paramCounter++;
      }
    }
    
    // Add updated_at timestamp
    updateFields.push(`updated_at = CURRENT_TIMESTAMP`);
    
    // If no fields to update, return error
    if (updateFields.length === 0) {
      return NextResponse.json(
        { error: 'No valid fields to update' },
        { status: 400 }
      );
    }
    
    // Add ID as the last parameter
    queryParams.push(id);
    
    // Execute update query
    const result = await query(
      `UPDATE news_articles SET ${updateFields.join(', ')} WHERE id = $${paramCounter} RETURNING *`,
      queryParams
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating news article:', error);
    return NextResponse.json(
      { error: 'Failed to update news article', details: String(error) },
      { status: 500 }
    );
  }
}

// DELETE handler to remove a specific news article
export async function DELETE(request: Request, context: { params: { id: string } }) {
  const { params } = context;
  try {
    const id = params.id;
    
    // Validate ID
    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'Invalid article ID' },
        { status: 400 }
      );
    }
    
    // Check if article exists
    const checkResult = await query('SELECT id FROM news_articles WHERE id = $1', [id]);
    if (checkResult.rows.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    
    // Delete the article
    await query('DELETE FROM news_articles WHERE id = $1', [id]);
    
    return NextResponse.json({ success: true, message: 'Article deleted successfully' });
  } catch (error) {
    console.error('Error deleting news article:', error);
    return NextResponse.json(
      { error: 'Failed to delete news article', details: String(error) },
      { status: 500 }
    );
  }
}