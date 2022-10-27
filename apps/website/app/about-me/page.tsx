import { use } from 'react';

import { Breadcrumbs, Container, PortableTextWrapper } from '../components';
import { getAboutMePage } from './data';

export default function AboutMe(): JSX.Element {
  const aboutMe = use(getAboutMePage());

  return (
    <Container>
      <Breadcrumbs
        links={[
          { href: '/', label: 'Home' },
          { href: '/about-me', label: 'About Me' },
        ]}
      />
      <h1>{aboutMe.title}</h1>
      <PortableTextWrapper value={aboutMe.content} />
    </Container>
  );
}
