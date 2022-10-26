export default {
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation(Rule) {
        return Rule.required();
      },
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
      validation(Rule) {
        return Rule.required();
      },
    },
  ],
  name: 'imageUpload',
  title: 'Image Upload',
  type: 'document',
};
