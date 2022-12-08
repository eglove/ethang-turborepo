import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import {
  type ListBuilder,
  type StructureBuilder,
  type StructureResolver,
  type StructureResolverContext,
} from 'sanity/lib/exports/desk';

export const deskStructure: StructureResolver = (
  S: StructureBuilder,
  context: StructureResolverContext
): ListBuilder => {
  return S.list()
    .title('Trustees Order')
    .items([
      ...S.documentTypeListItems(),
      orderableDocumentListDeskItem({
        S,
        context,
        title: 'Trustees Order',
        type: 'trustee',
      }),
    ]);
};
