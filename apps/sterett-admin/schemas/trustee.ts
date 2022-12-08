import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';
import { defineType } from 'sanity';
import { isRequired } from 'util-sanity/lib/validations';

export default defineType({
  fields: [
    orderRankField({ type: 'trustee' }),
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: isRequired,
    },
    {
      hidden: true,
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'duties',
      title: 'Duties',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  name: 'trustee',
  orderings: [
    // @ts-expect-error typing seems right
    orderRankOrdering,
    {
      by: [{ direction: 'asc', field: 'order' }],
      name: 'order',
      title: 'Order',
    },
  ],
  title: 'Trustee',
  type: 'document',
});
