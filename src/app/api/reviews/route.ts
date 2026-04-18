import { NextResponse } from 'next/server';
<<<<<<< HEAD

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function GET() {
  if (!supabaseConfigured) {
    // Return empty reviews list when DB is not set up
    return NextResponse.json([]);
  }

  try {
    const { supabase } = await import('@/lib/supabase');
=======
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
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

<<<<<<< HEAD
    if (!supabaseConfigured) {
      console.warn('⚠️ Supabase not configured — review not saved to DB.');
      return NextResponse.json({
        success: true,
        message: 'Thank you for your review! (Database not configured yet)',
      });
    }

    const { supabase } = await import('@/lib/supabase');
    const { error: dbError } = await supabase
      .from('reviews')
      .insert([{ name, rating, comment, category, is_approved: false }]);

    if (dbError) {
      console.error('Supabase Review Error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save review to database', details: dbError.message, code: dbError.code },
        { status: 500 }
      );
    }

=======
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
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
    return NextResponse.json({ success: true, message: 'Review saved successfully and pending approval!' });
  } catch (error) {
    console.error('General Review Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
