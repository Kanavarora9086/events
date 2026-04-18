import { NextResponse } from 'next/server';
<<<<<<< HEAD

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.SUPABASE_SERVICE_ROLE_KEY;

// GET all reviews for the admin panel (unfiltered)
export async function GET() {
  if (!supabaseConfigured) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { supabase } = await import('@/lib/supabase');
=======
import { supabase } from '@/lib/supabase';

// GET all reviews for the admin panel (unfiltered)
export async function GET() {
  try {
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

// PATCH to update approval status
export async function PATCH(request: Request) {
<<<<<<< HEAD
  if (!supabaseConfigured) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

=======
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
  try {
    const { id, is_approved } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Review ID is required' }, { status: 400 });
    }

<<<<<<< HEAD
    const { supabase } = await import('@/lib/supabase');
=======
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
    const { error } = await supabase
      .from('reviews')
      .update({ is_approved })
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
  }
}

// DELETE a review
export async function DELETE(request: Request) {
<<<<<<< HEAD
  if (!supabaseConfigured) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

=======
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Review ID is required' }, { status: 400 });
    }

<<<<<<< HEAD
    const { supabase } = await import('@/lib/supabase');
=======
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}
