import { defineType } from 'sanity';
import { isRequired } from 'util-sanity/lib/validations';

export default defineType({
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: isRequired,
    },
    {
      name: 'startsAt',
      title: 'Starts At',
      type: 'datetime',
      validation: isRequired,
    },
    {
      name: 'endsAt',
      title: 'Ends At',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
  name: 'calendarEvent',
  title: 'Calendar Event',
  type: 'document',
});
