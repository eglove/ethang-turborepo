import type { Dispatch, SetStateAction } from 'react';

import { Button } from '../button/button';
import styles from './pagination.module.css';

type PaginationProperties = {
  pageLength: number;
  setSkip: Dispatch<SetStateAction<number>>;
  skip: number;
  totalCount: number;
};

export function Pagination({
  pageLength,
  setSkip,
  skip,
  totalCount,
}: PaginationProperties): JSX.Element {
  const handleNavigation = (direction: 'next' | 'previous'): void => {
    if (direction === 'next' && skip + pageLength < totalCount) {
      setSkip(skip_ => {
        return skip_ + pageLength;
      });
    } else if (direction === 'previous' && skip >= pageLength) {
      setSkip(skip_ => {
        return skip_ - pageLength;
      });
    }
  };

  return (
    <div className={styles.PaginationContainer}>
      <Button
        size="small"
        text="Previous"
        buttonProperties={{
          disabled: skip < pageLength,
          onClick(): void {
            handleNavigation('previous');
          },
          type: 'button',
        }}
      />
      <div>
        Page: {skip / pageLength + 1} of{' '}
        {Number.isNaN(Math.ceil(totalCount / pageLength)) ||
        Math.ceil(totalCount / pageLength) === 0
          ? 1
          : Math.ceil(totalCount / pageLength)}{' '}
      </div>
      <Button
        size="small"
        text="Next"
        buttonProperties={{
          disabled: skip + pageLength >= totalCount,
          onClick(): void {
            handleNavigation('next');
          },
          type: 'button',
        }}
      />
    </div>
  );
}
