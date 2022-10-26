import { NextLink } from 'next-components';

type CourseLinkProperties = {
  courseUrl: {
    school: {
      name: string;
    };
    url: string;
  };
};

export function CourseLink({ courseUrl }: CourseLinkProperties): JSX.Element {
  return (
    <div>
      <NextLink linkProperties={{ href: courseUrl.url }}>
        {courseUrl.school.name}
      </NextLink>
      &ensp;
    </div>
  );
}
