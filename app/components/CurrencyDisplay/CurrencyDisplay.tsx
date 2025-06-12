'use client';

import { useEffect, useState } from 'react';

const CurrencyDisplay = () => {
  const [currency, setCurrency] = useState<'EUR' | 'CHF'>('EUR');

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch('/api/location');
        const data = await res.json();

        if (data.country === 'CH') {
          setCurrency('CHF');
        } else {
          setCurrency('EUR');
        }
      } catch (error) {
        console.error('Error fetching country:', error);
        setCurrency('EUR');
      }
    };

    fetchCountry();
  }, []);

  return <p>{currency}</p>;
};

export default CurrencyDisplay;
