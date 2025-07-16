import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'object',
          name: 'gallery',
          title: 'Image Gallery',
          fields: [
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'caption',
                      type: 'string',
                      title: 'Caption',
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: 'columns',
              title: 'Columns',
              type: 'number',
              options: {
                list: [
                  {title: '1 Column', value: 1},
                  {title: '2 Columns', value: 2},
                  {title: '3 Columns', value: 3},
                  {title: '4 Columns', value: 4},
                ],
              },
              initialValue: 2,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief description for previews and SEO',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'About', value: 'about'},
          {title: 'Contact', value: 'contact'},
          {title: 'FAQ', value: 'faq'},
          {title: 'Shipping & Returns', value: 'shipping'},
          {title: 'Custom', value: 'custom'},
        ],
      },
      initialValue: 'custom',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Set to true to make this page visible on the website',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for search engines (leave empty to use page title)',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Description for search engines (leave empty to use page excerpt)',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
          },
        },
      ],
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'object',
      fields: [
        {
          name: 'showInMenu',
          title: 'Show in Menu',
          type: 'boolean',
          description: 'Include this page in the main navigation menu',
          initialValue: false,
        },
        {
          name: 'menuOrder',
          title: 'Menu Order',
          type: 'number',
          description: 'Order in the navigation menu (lower numbers appear first)',
          initialValue: 0,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      published: 'published',
      pageType: 'pageType',
    },
    prepare(selection) {
      const {title, media, published, pageType} = selection
      return {
        title,
        subtitle: `${pageType} - ${published ? 'Published' : 'Draft'}`,
        media,
      }
    },
  },
})
