export default {
  name: 'documentUpload',
  title: 'Document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: ['Covenant', 'Meeting Minute'],
      }
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
      name: 'file',
      title: 'File',
      type: 'fileUpload',
      validation: Rule => Rule.required(),
    }
  ]
}
