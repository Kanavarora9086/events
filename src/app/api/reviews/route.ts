import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase Fetch Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('General Fetch Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, rating, comment, category } = data;

    if (!name || !rating || !comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Attempting to save review to Supabase...', { name, rating, category });

    const { error: dbError } = await supabase
      .from('reviews')
      .insert([
        { 
          name, 
          rating, 
          comment, 
          category,
          is_approved: false // Explicitly set to false for moderation
        }
      ]);

    if (dbError) {
      console.error('Supabase Review Error:', dbError);
      return NextResponse.json({ 
        error: 'Failed to save review to database', 
        details: dbError.message,
        code: dbError.code
      }, { status: 500 });
    }

    console.log('Successfully saved review to Supabase');
    return NextResponse.json({ success: true, message: 'Review saved successfully and pending approval!' });
  } catch (error) {
    console.error('General Review Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
