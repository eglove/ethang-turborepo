'use client';
import Link from 'next/link';

import { Container } from './components';

export default function Error(): JSX.Element {
  return (
    <Container>
      <p>
        Something went wrong! This site uses{' '}
        <Link href="https://beta.nextjs.org/docs">
          experimental server components with Next 13
        </Link>
        . Things might be wonky!
      </p>
    </Container>
  );
}
