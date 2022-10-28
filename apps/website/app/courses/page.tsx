import { NextLink } from 'next-components';
import { use } from 'react';

import { Breadcrumbs, Container, PortableTextWrapper } from '../components';
import { GetCourse } from './components/get-course';
import { getCourses } from './data';

export default function Courses(): JSX.Element {
  const courses = use(getCourses());

  return (
    <Container>
      <div>
        <Breadcrumbs
          links={[
            { href: '/', label: 'Home' },
            { href: '/courses', label: 'Courses' },
          ]}
        />
        <h1>The Recommended Courses</h1>
        <p>
          This page changes often, lock in your plan by{' '}
          <NextLink
            linkProperties={{
              href: '/public/files/course-curriculum.pdf',
            }}
          >
            downloading the October 2022 snapshot
          </NextLink>{' '}
          (PDF).
        </p>
        <p>
          This page is my attempt to put the best coding courses out there in
          one list. They are put in an order so that someone new to coding can
          start at the top, learn from scratch and end up knowing more than a
          college degree could ever provide. This list can take 2-3 years to
          complete and will cost money, but I believe there is nothing that
          brings so much quality together in one place.
        </p>
        {courses?.map(course => {
          return (
            <GetCourse course={course} key={course._id}>
              <PortableTextWrapper value={course.description} />
            </GetCourse>
          );
        })}
      </div>
    </Container>
  );
}
