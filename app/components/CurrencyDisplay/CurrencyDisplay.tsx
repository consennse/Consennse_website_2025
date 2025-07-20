// components/CurrencyDisplay.tsx
'use client';

import React, { useEffect, useState } from 'react';

const CurrencyDisplay: React.FC = () => {
  const [currency, setCurrency] = useState<'EUR' | 'CHF'>('EUR');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch('https://get.geojs.io/v1/ip/country.json');
        const data = await res.json();
        console.log(data.country);
        if (data?.country === 'CH') {
          setCurrency('CHF');
        } else {
          setCurrency('EUR');
        }
      } catch (error) {
        console.error('Error fetching location:', error);
        setCurrency('EUR'); // Fallback
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  if (loading) return <p>...</p>;


  return (
    <div>
      <p>{currency}</p>
    </div>
  );
};

export default CurrencyDisplay;
