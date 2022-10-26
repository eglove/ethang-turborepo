import { Button } from 'ui';
import { NextLink } from 'next-components';

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <Button />
      <NextLink linkProperties={{ href: 'google.com' }}>Link</NextLink>
    </div>
  );
}
