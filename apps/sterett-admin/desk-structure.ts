import S from '@sanity/desk-tool/structure-builder';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export default () => {
  return S.list()
    .title('Trustees Order')
    .items([
      ...S.documentTypeListItems(),
      orderableDocumentListDeskItem({
        title: 'Trustees Order',
        type: 'trustee',
      }),
    ]);
};
