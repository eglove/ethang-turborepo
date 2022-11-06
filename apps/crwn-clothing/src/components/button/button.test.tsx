import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  it('should render button correctly', () => {
    const { rerender } = render(<Button>Text</Button>);

    const element = screen.getByRole<HTMLButtonElement>('button', {
      name: 'Text',
    });
    expect(element).toBeDefined();
    expect(element.className).toBe('ButtonContainer ');
    expect(element.type).toBe('button');

    rerender(<Button variant="google">Text</Button>);
    expect(element.className).toBe('ButtonContainer GoogleSignIn');

    rerender(<Button variant="inverted">Text</Button>);
    expect(element.className).toBe('ButtonContainer Inverted');
  });
});
