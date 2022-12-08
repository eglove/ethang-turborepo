import { ImageIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import { isRequired } from 'util-sanity/lib/validations';

export default defineType({
  fields: [
    {
      name: 'description',
      title:
        'Description (This is read by screen readers for visually impaired people.)',
      type: 'string',
      validation: isRequired,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: isRequired,
    },
  ],
  icon: ImageIcon,
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
});
