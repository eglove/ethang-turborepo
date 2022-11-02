import { isSlugUnique } from '../util/is-slug-unique';
import { isRequired, slugify } from './validations';

export default {
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
        isUnique: isSlugUnique,
        slugify,
        source: 'title',
      },
      title: 'Slug',
      type: 'slug',
      validation: isRequired,
    },
    {
      name: 'reviews',
      title: 'Reviews Course',
      to: [{ type: 'course' }],
      type: 'reference',
    },
    {
      initialValue(): { date: Date } {
        return {
          date: new Date(),
        };
      },
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: isRequired,
    },
    {
      initialValue(): { date: Date } {
        return {
          date: new Date(),
        };
      },
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      validation: isRequired,
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
