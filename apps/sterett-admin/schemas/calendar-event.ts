export default {
  name: 'calendarEvent',
  title: 'Calendar Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'startsAt',
      title: 'Starts At',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'endsAt',
      title: 'Ends At',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    }
  ]
}
