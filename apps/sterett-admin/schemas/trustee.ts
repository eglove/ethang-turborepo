import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  fields: [
    orderRankField({ type: 'trustee' }),
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation(Rule) {
        return Rule.required();
      },
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
    orderRankOrdering,
    {
      by: [{ direction: 'asc', field: 'order' }],
      name: 'order',
      title: 'Order',
    },
  ],
  title: 'Trustee',
  type: 'document',
};
