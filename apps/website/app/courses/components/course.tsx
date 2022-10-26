import { NextLink } from 'next-components';

import type { CourseReturn } from '../data';
import styles from './course.module.css';
import { CourseLink } from './course-link';
import { ratingStyles, yearUpdatedStyles } from './util';

type CourseProperties = {
  children?: JSX.Element | JSX.Element[];
  course?: CourseReturn;
  instructors: string | undefined;
};

export function Course({
  children,
  course,
  instructors,
}: CourseProperties): JSX.Element | null {
  if (typeof course === 'undefined') {
    return null;
  }

  return (
    <details className={styles.CourseContainer}>
      <summary>
        <div className={styles.SummaryGrid}>
          <div className={styles.CourseTitle}>{course.title}</div>
          <div className={styles.YearUpdated}>
            {course.yearUpdated !== null && (
              <span style={yearUpdatedStyles(course.yearUpdated)}>
                {course.yearUpdated}
              </span>
            )}
          </div>
        </div>
      </summary>
      <div className={styles.SummaryGrid}>
        <div className={styles.Rating}>
          <span style={ratingStyles(course.rating)}>{course.rating}/5</span>
        </div>

        <div className={styles.ReviewUrl}>
          {course.ratingUrl !== null && (
            <NextLink linkProperties={{ href: course.ratingUrl }}>
              Full Review
            </NextLink>
          )}
        </div>
      </div>

      <div className={styles.Summary}>
        {typeof instructors !== 'undefined' && instructors !== '' && (
          <div>Instructors: {instructors}</div>
        )}
        {children}
      </div>
      <div className={styles.CourseLinks}>
        {course.courseUrls.map(courseUrl => {
          return <CourseLink courseUrl={courseUrl} key={courseUrl.url} />;
        })}
      </div>
    </details>
  );
}
