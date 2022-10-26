import { Button, Icon } from '@trussworks/react-uswds';
import type { Dispatch, SetStateAction } from 'react';

type PaginationProperties = {
  pageLength: number;
  setSkip: Dispatch<SetStateAction<number>>;
  skip: number;
  totalCount?: number;
};

const PaginationContainer = {
  alignItems: 'center',
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
};

const PaginationButton = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  margin: 0,
  placeItems: 'center',
};

export function TrussPaginate({
  pageLength = 0,
  setSkip,
  skip,
  totalCount = 0,
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
    <div style={PaginationContainer}>
      <Button
        disabled={skip < pageLength}
        style={PaginationButton}
        type="button"
        onClick={(): void => {
          handleNavigation('previous');
        }}
      >
        <Icon.NavigateBefore /> Previous
      </Button>
      <div>
        Page: {Math.floor(skip / pageLength + 1)} of{' '}
        {Number.isNaN(Math.ceil(totalCount / pageLength)) ||
        Math.ceil(totalCount / pageLength) === 0
          ? 1
          : Math.ceil(totalCount / pageLength)}{' '}
      </div>
      <Button
        disabled={skip + pageLength >= totalCount}
        style={PaginationButton}
        type="button"
        onClick={(): void => {
          handleNavigation('next');
        }}
      >
        Next <Icon.NavigateNext />
      </Button>
    </div>
  );
}
