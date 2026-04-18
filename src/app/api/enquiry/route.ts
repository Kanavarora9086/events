import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
<<<<<<< HEAD

=======
import { supabase } from '@/lib/supabase';
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, date, eventType, message } = data;

    // Validate Input basic
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // --- Supabase Integration ---
<<<<<<< HEAD
    const supabaseConfigured =
      !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
      !!process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseConfigured) {
      try {
        const { supabase } = await import('@/lib/supabase');
        console.log('Using Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing');
        const { error: dbError } = await supabase
          .from('enquiries')
          .insert([
            { 
              name, 
              email, 
              phone, 
              date, 
              event_type: eventType, 
              message 
            }
          ]);

        if (dbError) {
          console.error('Supabase Enquiry Error:', dbError);
          // Don't block the user — log the error but continue to email
        } else {
          console.log('Successfully saved enquiry to Supabase');
        }
      } catch (suppError) {
        console.error('Unexpected Supabase error:', suppError);
        // Don't block the user — continue to email
      }
    } else {
      console.warn('⚠️ Supabase not configured — enquiry not saved to DB.');
=======
    try {
      console.log('Using Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing');
      const { error: dbError } = await supabase
        .from('enquiries')
        .insert([
          { 
            name, 
            email, 
            phone, 
            date, 
            event_type: eventType, 
            message 
          }
        ]);

      if (dbError) {
        console.error('Supabase Enquiry Error:', {
          message: dbError.message,
          details: dbError.details,
          hint: dbError.hint,
          code: dbError.code
        });
        return NextResponse.json({ 
          error: 'Failed to save booking to database', 
          details: dbError.message,
          code: dbError.code 
        }, { status: 500 });
      }
      
      console.log('Successfully saved enquiry to Supabase');
    } catch (suppError) {
      console.error('Unexpected Supabase error:', suppError);
      return NextResponse.json({ 
        error: 'Database connection error', 
        details: suppError instanceof Error ? suppError.message : 'Unknown error' 
      }, { status: 500 });
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
    }
    // ----------------------------


    // Check if credentials are set to something valid
    const isDefaultEmail = process.env.EMAIL_USER === 'your-email-address@gmail.com';
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || isDefaultEmail) {
      console.warn('⚠️ WARNING: EMAIL_USER or EMAIL_PASS not set in .env! Simulating successful email notification.');
      return NextResponse.json({ 
        success: true, 
        message: 'Booking saved successfully! (Email notifications are currently disabled)' 
      });
    }

    // Configure Nodemailer 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Chacha Events Enquiry from ${name} [${eventType}]`,
        text: `
--------------------------------------
New Event Enquiry
--------------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Event Type: ${eventType}

Message Details:
${message}
--------------------------------------
        `,
        html: `
        <h2>New Event Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Type:</strong> ${eventType}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
        `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Booking saved and email sent successfully!' });
  } catch (error) {
    console.error('General Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
