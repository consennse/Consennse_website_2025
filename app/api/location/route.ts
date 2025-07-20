import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://get.geojs.io/v1/ip/country.json');
    const data = await res.json();

    const country = data?.countryCode || 'DEFAULT';

    return NextResponse.json({ country });
  } catch (error) {
    console.error('Location API error:', error);
    return NextResponse.json({ country: 'DEFAULT' });
  }
}
