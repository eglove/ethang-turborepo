import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  fields: [
    orderRankField({ type: 'course' }),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation(Rule) {
        return Rule.required();
      },
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'number',
    },
    {
      name: 'rating',
      options: {
        list: [1, 2, 3, 4, 5],
      },
      title: 'Rating',
      type: 'number',
      validation(Rule) {
        return Rule.required();
      },
    },
    {
      name: 'ratingUrl',
      title: 'Rating URL',
      type: 'url',
    },
    {
      name: 'udemyId',
      title: 'Udemy Id',
      type: 'number',
    },
    {
      name: 'yearUpdated',
      title: 'Year Updated',
      type: 'number',
    },
    {
      name: 'isRecommended',
      title: 'Recommended',
      type: 'boolean',
    },
    {
      name: 'school',
      title: 'School',
      to: [{ type: 'school' }],
      type: 'reference',
    },
    {
      name: 'courseUrls',
      of: [
        {
          to: [{ type: 'courseUrl' }],
          type: 'reference',
        },
      ],
      title: 'Course URLs',
      type: 'array',
    },
    {
      name: 'instructors',
      of: [
        {
          to: [{ type: 'person' }],
          type: 'reference',
        },
      ],
      title: 'Instructors',
      type: 'array',
    },
    {
      name: 'description',
      title: 'Description (Optional, Used on Review Page)',
      type: 'blockContent',
    },
  ],
  name: 'course',
  orderings: [
    orderRankOrdering,
    {
      by: [{ direction: 'asc', field: 'title' }],
      name: 'titleDesc',
      title: 'Title',
    },
  ],
  title: 'Course',
  type: 'document',
};
