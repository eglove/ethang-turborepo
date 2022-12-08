import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import {
  type ListBuilder,
  type StructureBuilder,
  type StructureResolverContext,
} from 'sanity/lib/exports/desk';

export default (
  S: StructureBuilder,
  context: StructureResolverContext
): ListBuilder => {
  return S.list()
    .title('Recommended Courses')
    .items([
      ...S.documentTypeListItems(),
      orderableDocumentListDeskItem({
        S,
        context,
        filter: 'isRecommended == true',
        title: 'Recommended Courses',
        type: 'course',
      }),
    ]);
};
