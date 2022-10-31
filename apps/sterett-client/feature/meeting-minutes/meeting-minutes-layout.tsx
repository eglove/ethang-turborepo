import { useQuery } from '@tanstack/react-query';
import { TrussNextLink } from 'trussworks-next-components';

import { Container } from '../common/container/container';
import {
  getMeetingMinutes,
  getMeetingMinutesKey,
} from './meeting-minutes-groq';

export function MeetingMinutesLayout(): JSX.Element {
  const { data } = useQuery(getMeetingMinutesKey(), getMeetingMinutes);

  return (
    <Container>
      <div>
        {data?.map(meetingMinute => {
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
