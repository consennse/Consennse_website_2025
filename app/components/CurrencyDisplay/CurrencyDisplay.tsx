// components/CurrencyDisplay.tsx
'use client';

import React, { useEffect, useState } from 'react';

const CurrencyDisplay: React.FC = () => {
  const [currency, setCurrency] = useState<'EUR' | 'CHF'>('EUR');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

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

  if (loading) return <p>Loading currency...</p>;


  return (
    <div>
      <p>{currency}</p>
    </div>
  );
};

export default CurrencyDisplay;
