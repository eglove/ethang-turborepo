import { formatList } from 'util-typescript';

import type { CourseReturn } from '../data';
import { Course } from './course';

type GetCourseProperties = {
  children?: JSX.Element | JSX.Element[];
  course: CourseReturn | undefined;
};

export function GetCourse({
  children,
  course,
}: GetCourseProperties): JSX.Element | null {
  if (course === undefined) {
    return null;
  }

  const getInstructorNames = (): string | undefined => {
    if (Array.isArray(course.instructors)) {
      return formatList(
        course.instructors.map(courseInstructor => {
          return courseInstructor.name;
        }),
      );
    }
  };

  return (
    <Course course={course} instructors={getInstructorNames()}>
      {children}
    </Course>
  );
}
