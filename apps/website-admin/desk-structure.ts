import S from '@sanity/desk-tool/structure-builder';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export default () => {
  return S.list()
    .title('Recommended Courses')
    .items([
      ...S.documentTypeListItems(),
      orderableDocumentListDeskItem({
        filter: 'isRecommended == true',
        title: 'Recommended Courses',
        type: 'course',
      }),
    ]);
};
