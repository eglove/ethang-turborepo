import { defineType } from 'sanity';

import { isRequired } from './validations';

export default defineType({
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: isRequired,
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: isRequired,
    },
    {
      name: 'image',
      title: 'Image',
      to: [{ type: 'imageUpload' }],
      type: 'reference',
    },
  ],
  name: 'school',
  title: 'School',
  type: 'document',
});
