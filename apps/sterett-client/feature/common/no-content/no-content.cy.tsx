import { NoContent } from './no-content';

describe('<NoContent />', () => {
  it('should render with the correct message', () => {
    cy.mount(<NoContent />);

    cy.findByText("There's nothing here yet, check back later.").should(
      'exist',
    );
  });
});
