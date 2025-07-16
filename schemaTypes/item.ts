import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'item',
  title: 'Ceramic Item',
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
              description: 'Important for SEO and accessibility.',
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
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description',
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
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: [
          {title: 'USD ($)', value: 'USD'},
          {title: 'EUR (€)', value: 'EUR'},
          {title: 'GBP (£)', value: 'GBP'},
        ],
      },
      initialValue: 'USD',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {
          name: 'height',
          title: 'Height (cm)',
          type: 'number',
        },
        {
          name: 'width',
          title: 'Width (cm)',
          type: 'number',
        },
        {
          name: 'depth',
          title: 'Depth (cm)',
          type: 'number',
        },
        {
          name: 'weight',
          title: 'Weight (kg)',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of materials used (e.g., stoneware, porcelain, glaze types)',
    }),
    defineField({
      name: 'technique',
      title: 'Technique',
      type: 'string',
      description: 'Pottery technique used (e.g., wheel-thrown, hand-built, slip-cast)',
    }),
    defineField({
      name: 'firing',
      title: 'Firing Information',
      type: 'string',
      description: 'Firing details (e.g., cone 6, gas kiln, electric kiln)',
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          {title: 'In Stock', value: 'in-stock'},
          {title: 'Out of Stock', value: 'out-of-stock'},
          {title: 'Made to Order', value: 'made-to-order'},
          {title: 'Coming Soon', value: 'coming-soon'},
        ],
      },
      initialValue: 'in-stock',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity Available',
      type: 'number',
      description: 'Leave empty for made-to-order items',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Item',
      type: 'boolean',
      description: 'Show this item prominently on the website',
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
          description: 'Title for search engines (leave empty to use item title)',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Description for search engines (leave empty to use item description)',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      price: 'price',
      availability: 'availability',
    },
    prepare(selection) {
      const {title, media, price, availability} = selection
      return {
        title,
        subtitle: `$${price} - ${availability}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Date Created, New',
      name: 'createdAtDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
    {
      title: 'Date Created, Old',
      name: 'createdAtAsc',
      by: [{field: '_createdAt', direction: 'asc'}],
    },
    {
      title: 'Price, High to Low',
      name: 'priceDesc',
      by: [{field: 'price', direction: 'desc'}],
    },
    {
      title: 'Price, Low to High',
      name: 'priceAsc',
      by: [{field: 'price', direction: 'asc'}],
    },
  ],
})
