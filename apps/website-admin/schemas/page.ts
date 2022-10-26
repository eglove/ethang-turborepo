import { isSlugUnique } from '../util/is-slug-unique';

export default {
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation(Rule) {
        return Rule.required();
      },
    },
    {
      name: 'slug',
      options: {
        isUnique: isSlugUnique,
        slugify(input) {
          return input.toLowerCase().replace(/\s+/g, '-').slice(0, 200);
        },
        source: 'title',
      },
      title: 'Slug',
      type: 'slug',
      validation(Rule) {
        return Rule.required();
      },
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
};
