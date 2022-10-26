import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './block-content'
import newsUpdate from "./news-update";
import calendarEvent from "./calendar-event";
import file from "./file";
import document from './document-upload';
import galleryImage from "./gallery-image";
import trustee from "./trustee";
import page from "./page";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    newsUpdate,
    calendarEvent,
    document,
    galleryImage,
    trustee,

    blockContent,
    file,
  ]),
})
