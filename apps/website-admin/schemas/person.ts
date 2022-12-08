import { defineType } from 'sanity';

export default defineType({
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
  name: 'person',
  title: 'Person',
  type: 'document',
});
