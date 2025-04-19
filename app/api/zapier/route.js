// app/api/zapier/route.js
export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch('https://hooks.zapier.com/hooks/catch/1132476/2zudfr7/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to send to Zapier' }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: 'Sent to Zapier successfully' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
    });
  }
}
