import { TrussNextLink } from 'trussworks-next-components';

import { Container } from '../common/container/container';
import type { GetMeetingMinutesReturn } from './meeting-minutes-groq';

type MeetingMinutesLayoutProperties = {
  meetingMinutes: GetMeetingMinutesReturn;
};

export function MeetingMinutesLayout({
  meetingMinutes,
}: MeetingMinutesLayoutProperties): JSX.Element {
  return (
    <Container>
      <div>
        {meetingMinutes?.map(meetingMinute => {
          return (
            <div key={meetingMinute._id} style={{ padding: '8px' }}>
              <TrussNextLink isNewTab href={meetingMinute.file.asset.url}>
                {meetingMinute.title}
              </TrussNextLink>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
