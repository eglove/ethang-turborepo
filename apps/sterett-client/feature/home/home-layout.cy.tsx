import { type GetPageReturn } from '../../util/groq/page-groq';
import { HomeLayout } from './home-layout';

describe('Home Layout', () => {
  let homeData: GetPageReturn;

  beforeEach(() => {
    homeData = {
      _id: '123',
      content: [
        {
          _key: '1',
          _type: 'block',
          children: [
            {
              _key: '1-0',
              _type: 'span',
              text: 'Welcome to the test homepage',
            },
          ],
        },
        {
          _key: '2',
          _type: 'block',
          children: [
            {
              _key: '2-0',
              _type: 'span',
              text: 'This is a sample block of text',
            },
          ],
        },
      ],
      title: 'Title',
    } as unknown as GetPageReturn;
  });

  it('should render correctly', () => {
    cy.mount(<HomeLayout homeData={homeData} />);
    cy.findByText('Welcome to the test homepage')
      .parent()
      .should('have.length', 1);
  });

  it('should render the correct content', () => {
    cy.mount(<HomeLayout homeData={homeData} />);
    cy.findByText('Welcome to the test homepage')
      .parent()
      .find('p')
      .should('have.length', 2)
      .each(($p, index) => {
        // @ts-expect-error allow for test
        expect($p.text()).to.contain(homeData.content[index].children[0].text);
      });
  });
});
