import type { TypedObject } from '@portabletext/types';
import { cache } from 'react';

import { ethangSanityClient, NO_DRAFTS, SANITY_IMAGE } from '../../util/sanity';

export type CourseReturn = {
  _id: string;
  courseUrls: Array<{ school: { name: string }; url: string }>;
  description: TypedObject[];
  instructors: Array<{ name: string }>;
  rating: number;
  ratingUrl: string | null;
  recommendedOrder: number | null;
  title: string;
  udemyId: number | null;
  yearUpdated: number | null;
};

export type GetCoursesReturn = CourseReturn[];

export const getCourses = cache(async (): Promise<GetCoursesReturn> => {
  const where = `*[_type == "course" && isRecommended == true && ${NO_DRAFTS}]`;
  const orderBy = `order(orderRank asc)`;
  const select = `{
    _id,
    rating,
    ratingUrl,
    recommendedOrder,
    title,
    yearUpdated,
    description[] {
      ...,
      image-> {
        description,
        ${SANITY_IMAGE}
      },
    },
    courseUrls[]-> {
      url,
      school-> {
        name
      }
    },
    instructors[]-> {
      name
    }
  }`;

  const coursesQuery = `${where} | ${orderBy} ${select}`;

  return ethangSanityClient.fetch<GetCoursesReturn>(coursesQuery);
});
