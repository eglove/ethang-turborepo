import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import blockContent from './block-content';
import blog from './blog';
import course from './course';
import courseUrl from './course-url';
import imageUpload from './image-upload';
import page from './page';
import person from './person';
import school from './school';

export default createSchema({
  name: 'default',
  types: [
    ...schemaTypes,
    blog,
    page,
    course,
    courseUrl,
    school,
    person,
    imageUpload,

    blockContent,
  ],
});
