'use client';

import { useState } from 'react';
import { Pagination } from 'react-components/lib/pagination/pagination';

export function PaginationDemo(): JSX.Element {
  const [skip, setSkip] = useState(0);

  return (
    <div>
      <h2>Pagination Bar</h2>
      <Pagination
        pageLength={10}
        setSkip={setSkip}
        skip={skip}
        totalCount={100}
      />
    </div>
  );
}
