'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Pagination } from 'react-components/lib/pagination/pagination';

export function PaginationDemo(): JSX.Element {
  const [skip, setSkip] = useState(0);

  return (
    <div>
      <h2>Pagination Bar</h2>
      <p>
        <Link href="https://github.com/eglove/ethang-turborepo/tree/main/packages/react-components/lib/pagination">
          Source
        </Link>
      </p>
      <Pagination
        pageLength={10}
        setSkip={setSkip}
        skip={skip}
        totalCount={100}
      />
    </div>
  );
}
