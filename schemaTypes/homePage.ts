import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroBackground',
      title: 'Hero Background',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {name: 'caption', title: 'Caption', type: 'string'},
      ],
      description: 'Large full-bleed image at the top of the home page.',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'featuredItems',
      title: 'Featured Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'item'}]}],
    }),
    defineField({
      name: 'featuredArtists',
      title: 'Featured Artists',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'artist'}]}],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            {name: 'heading', title: 'Heading', type: 'string'},
            {name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]},
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [
                {name: 'alt', title: 'Alternative text', type: 'string'},
                {name: 'caption', title: 'Caption', type: 'string'},
              ],
            },
            {
              name: 'layout',
              title: 'Layout',
              type: 'string',
              options: {
                list: [
                  {title: 'Image Left', value: 'image-left'},
                  {title: 'Image Right', value: 'image-right'},
                  {title: 'Full Width', value: 'full'},
                ],
              },
              initialValue: 'image-right',
            },
          ],
        },
        {
          type: 'object',
          name: 'gallery',
          title: 'Image Gallery',
          fields: [
            {name: 'heading', title: 'Heading', type: 'string'},
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                      validation: (Rule) => Rule.required(),
                    },
                    {name: 'caption', type: 'string', title: 'Caption'},
                  ],
                },
              ],
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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'metaTitle', title: 'Meta Title', type: 'string'},
        {name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3},
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', media: 'heroBackground'},
  },
})
