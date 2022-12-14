import { defineType } from 'sanity';

export default defineType({
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'school',
      title: 'School',
      to: [{ type: 'school' }],
      type: 'reference',
    },
  ],
  name: 'courseUrl',
  title: 'Course URL',
  type: 'document',
});
