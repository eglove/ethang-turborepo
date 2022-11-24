import { Breadcrumbs, Container } from '../components';

export default function Resume(): JSX.Element | null {
  return (
    <Container>
      <Breadcrumbs
        links={[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/resume',
            label: 'Resume',
          },
        ]}
      />
      <br />
      <iframe
        height="1125px"
        sandbox={undefined}
        src="/files/Ethan-Glover-Resume.pdf"
        width="100%"
      />
    </Container>
  );
}
