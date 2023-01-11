import { faker } from '@faker-js/faker';

import { type GetMeetingMinutesReturn } from './meeting-minutes-groq';
import { MeetingMinutesLayout } from './meeting-minutes-layout';

describe('Meeting Minutes', () => {
  const meetingMinutes: GetMeetingMinutesReturn = [];

  beforeEach(() => {
    for (let index = 0; index < 10; index++) {
      meetingMinutes.push({
        _id: faker.datatype.string(),
        file: {
          asset: {
            url: faker.internet.url(),
          },
        },
        title: faker.datatype.uuid(),
      });
    }

    cy.mount(<MeetingMinutesLayout meetingMinutes={meetingMinutes} />);
  });

  it('should render correctly', () => {
    cy.findAllByRole('link').should('have.length', meetingMinutes.length);
  });

  it('should render the correct links', () => {
    for (const meetingMinute of meetingMinutes) {
      cy.findByRole('link', {
        name: meetingMinute.title,
      }).should('have.attr', 'href', meetingMinute.file.asset.url);
    }
  });

  it('should open links in a new tab', () => {
    for (const meetingMinute of meetingMinutes) {
      cy.findByRole('link', {
        name: meetingMinute.title,
      }).should('have.attr', 'target', '_blank');
    }
  });
});
