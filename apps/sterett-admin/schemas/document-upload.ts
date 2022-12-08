import { DocumentPdfIcon } from '@sanity/icons';
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
      name: 'category',
      options: {
        list: ['Covenant', 'Meeting Minute'],
      },
      title: 'Category',
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
      name: 'file',
      title: 'File',
      type: 'fileUpload',
      validation: isRequired,
    },
  ],
  icon: DocumentPdfIcon,
  name: 'documentUpload',
  title: 'Document',
  type: 'document',
});
