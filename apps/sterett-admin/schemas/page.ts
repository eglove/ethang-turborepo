import { DocumentTextIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import { isRequired, slugify } from 'util-sanity/lib/validations';

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
        slugify,
        source: 'title',
      },
      title: 'Slug - https://sterettcreekvillagetrustee.com/page/SLUG',
      type: 'slug',
      validation: isRequired,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  icon: DocumentTextIcon,
  name: 'page',
  title: 'Page',
  type: 'document',
});
