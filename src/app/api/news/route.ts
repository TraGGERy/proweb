import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { NewsArticle } from '@/lib/models/schema';

// GET handler to fetch all news articles
export async function GET(request: Request) {
  try {
    // Get query parameters
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const featured = url.searchParams.get('featured');
    const search = url.searchParams.get('search');
    
    // Build the SQL query based on filters
    let sqlQuery = 'SELECT * FROM news_articles';
    const queryParams: any[] = [];
    const conditions: string[] = [];
    
    if (category && category !== 'All') {
      conditions.push('category = $' + (queryParams.length + 1));
      queryParams.push(category);
    }
    
    if (featured === 'true') {
      conditions.push('featured = $' + (queryParams.length + 1));
      queryParams.push(true);
    }
    
    if (search) {
      conditions.push('(title ILIKE $' + (queryParams.length + 1) + ' OR excerpt ILIKE $' + (queryParams.length + 1) + ')');
      queryParams.push(`%${search}%`);
    }
    
    if (conditions.length > 0) {
      sqlQuery += ' WHERE ' + conditions.join(' AND ');
    }
    
    sqlQuery += ' ORDER BY date DESC';
    
    // Execute the query
    const result = await query(sqlQuery, queryParams);
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching news articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news articles', details: String(error) },
      { status: 500 }
    );
  }
}

// POST handler to create a new news article
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'excerpt', 'content', 'date', 'author', 'category', 'image'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Set default for featured if not provided
    const featured = body.featured ?? false;
    
    // Insert the new article
    const result = await query(
      `INSERT INTO news_articles 
       (title, excerpt, content, date, author, category, image, featured) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING *`,
      [body.title, body.excerpt, body.content, body.date, body.author, body.category, body.image, featured]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating news article:', error);
    return NextResponse.json(
      { error: 'Failed to create news article', details: String(error) },
      { status: 500 }
    );
  }
}