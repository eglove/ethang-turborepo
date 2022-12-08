import { BulbOutlineIcon } from '@sanity/icons';
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
      initialValue(): { date: Date } {
        return {
          date: new Date(),
        };
      },
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: isRequired,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: isRequired,
    },
  ],
  icon: BulbOutlineIcon,
  name: 'newsUpdate',
  title: 'News Update',
  type: 'document',
});
