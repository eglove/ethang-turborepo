import {isSlugUnique} from "../util/is-slug-unique";

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug - https://sterettcreekvillagetrustee.com/page/SLUG',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        isUnique: isSlugUnique,
        source: 'title',
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    }
  ]
}
