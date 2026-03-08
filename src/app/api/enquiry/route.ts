import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, date, eventType, message } = data;

    // Validate Input basic
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if credentials are set to something valid
    const isDefaultEmail = process.env.EMAIL_USER === 'your-email-address@gmail.com';
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || isDefaultEmail) {
      console.warn('⚠️ WARNING: EMAIL_USER or EMAIL_PASS not set in .env! Simulating successful form submission.');
      // Return success gracefully so the frontend UI doesn't break
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully! (Email notifications are currently disabled until .env is configured)' 
      });
    }

    // Configure Nodemailer 
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change the service to whatever you use (e.g., outlook, custom SMTP)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail!
      },
    });

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Since using App password, send from authenticated user
        to: process.env.EMAIL_USER, // Sending the notification to the site owner
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

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
