import { defineType } from 'sanity';

export default defineType({
  name: 'blockContent',
  of: [
    {
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        annotations: [
          {
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
              },
            ],
            name: 'link',
            title: 'URL',
            type: 'object',
          },
        ],
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
      ],
      title: 'Block',
      type: 'block',
    },
    { type: 'code' },
    {
      fields: [
        {
          name: 'image',
          to: [{ type: 'imageUpload' }],
          type: 'reference',
        },
      ],
      name: 'imageEmbed',
      title: 'Image',
      type: 'document',
    },
    {
      fields: [
        {
          name: 'citationText',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'citationUrl',
          title: 'URL',
          type: 'url',
        },
        {
          name: 'quote',
          title: 'Quote',
          type: 'string',
        },
      ],
      name: 'quote',
      title: 'Quote',
      type: 'document',
    },
    {
      fields: [
        {
          name: 'id',
          title: 'ID',
          type: 'string',
        },
      ],
      name: 'gist',
      title: 'Gist',
      type: 'document',
    },
    {
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'id',
          title: 'Id',
          type: 'string',
        },
      ],
      name: 'youtubeId',
      title: 'YouTube Video',
      type: 'document',
    },
  ],
  title: 'Block Content',
  type: 'array',
});
