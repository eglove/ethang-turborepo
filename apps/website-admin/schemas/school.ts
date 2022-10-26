export default {
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation(Rule) {
        return Rule.required();
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation(Rule) {
        return Rule.required();
      },
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
};
