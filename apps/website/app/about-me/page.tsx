import { Breadcrumbs, Container, PortableTextWrapper } from '../components';
import { getAboutMePage } from './data';

export default async function AboutMe(): Promise<JSX.Element> {
  const aboutMe = await getAboutMePage();

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
