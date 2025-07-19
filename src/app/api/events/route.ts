import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/client'; 

// Handler for GET requests to this API route.
// This function fetches all documents of type 'events' from Sanity.io.
export async function GET(request: Request) {
  console.log(request);
  try {
    // Define your GROQ query to fetch 'events' documents.
    // This query selects all documents where _type is 'events' and orders them by 'date' in descending order.
    // const query = `*[_type == "events"] | order(publishedAt desc) {
    const query = `*[_type == "events"] | order(date desc) {
      _id,
      title,
      date,
      time,
      location,
      category,
      image,
      description,
      featured,
      publishedAt
    }`;

    // Execute the query using the Sanity client.
    const events = await sanityClient.fetch(query);

    // Return the fetched messages as a JSON response.
    return NextResponse.json(events, { status: 200 });
  } catch (error: unknown) {
    
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
  }
}

// Example of a POST request handler 
// export async function POST(request: Request) {
//   try {
//     const data = await request.json();
//     // In a real scenario, you would save 'data' to your database/CMS
//     console.log('Received data for new event:', data);

//     return NextResponse.json(
//       { message: 'Event created successfully!', receivedData: data },
//       { status: 201 } // 201 Created status
//     );
//   } catch (error) {
//     console.error('Error creating event:', error);
//     return NextResponse.json(
//       { message: 'Failed to create event', error: error.message },
//       { status: 500 }
//     );
//   }
// }
