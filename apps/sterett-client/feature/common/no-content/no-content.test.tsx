import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { NoContent } from './no-content';

describe('No Content', () => {
  beforeEach(() => {
    render(<NoContent />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render with the correct message', () => {
    const element = screen.getByText(
      "There's nothing here yet, check back later.",
    );

    expect(element.textContent).toEqual(
      "There's nothing here yet, check back later.",
    );
  });

  it('should have the correct number of elements', () => {
    const element = screen.getByText(
      "There's nothing here yet, check back later.",
    );

    expect(element.parentElement?.children.length).toEqual(1);
  });
});
