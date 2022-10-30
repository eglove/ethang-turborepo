import { NextLink } from 'next-components';

import { Breadcrumbs, Container } from '../components';
import PortableTextWrapper from '../components/portable-text/portable-text-wrapper';
import { GetCourse } from './components/get-course';
import { getCourses } from './data';

export default async function Courses(): Promise<JSX.Element> {
  const courses = await getCourses();

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
              href: '/files/course-curriculum.pdf',
            }}
          >
            downloading the November 2022 snapshot
          </NextLink>{' '}
          (PDF).
        </p>
        <p>
          This page is my attempt to put the best coding courses out there in
          one list. They are put in an order so that someone new to coding can
          start at the top, learn from scratch and end up knowing more than a
          college degree could ever provide. This list can take few years to
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
