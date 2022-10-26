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
      name: 'reviews',
      title: 'Reviews Course',
      to: [{ type: 'course' }],
      type: 'reference',
    },
    {
      initialValue() {
        return {
          date: new Date(),
        };
      },
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation(Rule) {
        return Rule.required();
      },
    },
    {
      initialValue() {
        return {
          date: new Date(),
        };
      },
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      validation(Rule) {
        return Rule.required();
      },
    },
    {
      name: 'authors',
      of: [
        {
          to: [{ type: 'person' }],
          type: 'reference',
        },
      ],
      title: 'Authors',
      type: 'array',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      to: [{ type: 'imageUpload' }],
      type: 'reference',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  name: 'blog',
  title: 'Blog',
  type: 'document',
};
