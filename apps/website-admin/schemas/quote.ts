import { isRequired } from './validations';

export default {
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: isRequired,
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: isRequired,
    },
  ],
  name: 'quote',
  title: 'Quote',
  type: 'document',
};
