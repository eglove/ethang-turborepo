export default {
  name: 'newsUpdate',
  title: 'News Update',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required(),
      initialValue: () => ({
        date: new Date(),
      })
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }
  ]
}
