import { Container } from '../components';

export default function Resume(): JSX.Element | null {
  return (
    <Container>
      <iframe
        height="1125px"
        sandbox={undefined}
        src="/files/Ethan-Glover-Resume.pdf"
        width="100%"
      />
    </Container>
  );
}
