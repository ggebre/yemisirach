import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/client'; // Assuming @/sanity/client points to your configured Sanity client for mutations

// This API route handles POST requests to create a new message document in Sanity.io.
// It receives data from the frontend, uses a securely configured Sanity client
// (with a write token) to perform the mutation, and returns a JSON response.

export async function POST(request: Request) {
  
  try {
    const body = await request.json(); // Safely parse the request body as JSON
    console.log('Received message data:', body);

    // Extract data from the request body.
    // Ensure these fields match what your frontend form is sending and your Sanity schema expects.
    const { name, email, phone, subject, message } = body;

    // Basic validation: Check if required fields are present
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields: name, email, subject, and message are required.' },
        { status: 400 } // Bad Request status
      );
    }

    // Construct the document to be created in Sanity
    // The '_type' must match a document type defined in your Sanity schema (e.g., 'message').
    // Ensure field names (name, email, phone, subject, message) match your Sanity schema.
    const newDoc = {
        _type: 'message', // Your Sanity document type
        name: name,
        email: email,
        phone: phone || null, // Phone is optional, set to null if not provided
        subject: subject,
        message: message,
        slug: name,
        publishedAt: new Date().toISOString(), // Timestamp for when the message was received
    };

    // Perform the mutation (create the document) using the Sanity client
    const result = await sanityClient.create(newDoc);

    // Log the successful creation for server-side debugging
    console.log('Message document created in Sanity:', result);

    // Return a success response to the client
    return NextResponse.json(
      { message: 'Message sent successfully! Thank you for contacting us.', documentId: result._id },
      { status: 201 } // 201 Created status is appropriate for successful resource creation
    );
  } catch (error: unknown) {
    // Catch any errors that occur during request parsing or Sanity interaction
    console.error('Error creating message:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Failed to send message. An internal server error occurred.', error: error.message || 'Unknown error' },
        { status: 500 } // 500 Internal Server Error
      );
    } else {
      return NextResponse.json(
      { message: 'Failed to send message. An internal server error occurred.'},
      { status: 500 } // 500 Internal Server Error
    );
    }

    // Return a detailed error response to the client
    
  }
}

// Optionally, you can explicitly export other HTTP methods that are not allowed
// to return a 405 for those methods, though Next.js handles this by default.
export async function GET(request: Request) {
  console.log(request)
  return NextResponse.json({ message: 'GET method not allowed for this endpoint.' }, { status: 405 });
}


