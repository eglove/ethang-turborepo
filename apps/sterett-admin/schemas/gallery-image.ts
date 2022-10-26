export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description (This is read by screen readers for visually impaired people.)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required(),
    }
  ]
}
