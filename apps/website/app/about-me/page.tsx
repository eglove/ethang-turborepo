import { Breadcrumbs, Container, PortableTextWrapper } from '../components';
// Next 13 Beta, styles in components don't always work if not imported on a page
// eslint-disable-next-line @typescript-eslint/no-unused-vars,unused-imports/no-unused-imports
import betaStyles from '../components/header/header.module.css';
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
