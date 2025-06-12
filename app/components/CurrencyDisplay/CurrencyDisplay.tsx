'use client';

import { useEffect, useState } from 'react';

const CurrencyDisplay = () => {
  const [currency, setCurrency] = useState<'EUR' | 'CHF'>('EUR');

  useEffect(() => {
    const countryMatch = document.cookie
      .split('; ')
      .find(row => row.startsWith('country='));

    const country = countryMatch?.split('=')[1];

    if (country === 'CH') {
      setCurrency('CHF');
    } else {
      setCurrency('EUR');
    }
  }, []);

  return (
    <p>
      {currency}
    </p>
  );
};

export default CurrencyDisplay;
