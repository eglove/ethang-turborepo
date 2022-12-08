import { defineType } from 'sanity';

import { isRequired } from './validations';

export default defineType({
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: isRequired,
    },
    {
      name: 'slug',
      options: {
        slugify(input): string {
          return input.toLowerCase().replace(/\s+/g, '-').slice(0, 200);
        },
        source: 'title',
      },
      title: 'Slug',
      type: 'slug',
      validation: isRequired,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  name: 'page',
  title: 'Page',
  type: 'document',
});
