import { defineType } from 'sanity';

import { isRequired } from './validations';

export default defineType({
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: isRequired,
    },
    {
      name: 'category',
      options: {
        list: ['Home Image'],
      },
      title: 'Category',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: isRequired,
    },
  ],
  name: 'imageUpload',
  title: 'Image Upload',
  type: 'document',
});
