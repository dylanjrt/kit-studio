import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the website for SEO',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Small icon that appears in browser tabs',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 3,
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State/Province',
          type: 'string',
        },
        {
          name: 'zipCode',
          title: 'ZIP/Postal Code',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        },
        {
          name: 'pinterest',
          title: 'Pinterest',
          type: 'url',
        },
        {
          name: 'etsy',
          title: 'Etsy',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'business',
      title: 'Business Information',
      type: 'object',
      fields: [
        {
          name: 'businessName',
          title: 'Business Name',
          type: 'string',
        },
        {
          name: 'taxId',
          title: 'Tax ID/EIN',
          type: 'string',
        },
        {
          name: 'businessHours',
          title: 'Business Hours',
          type: 'text',
          rows: 4,
          description: 'e.g., Monday-Friday: 9AM-5PM, Saturday: 10AM-3PM',
        },
        {
          name: 'acceptedPaymentMethods',
          title: 'Accepted Payment Methods',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Credit Cards', value: 'credit-cards'},
              {title: 'PayPal', value: 'paypal'},
              {title: 'Venmo', value: 'venmo'},
              {title: 'Cash', value: 'cash'},
              {title: 'Check', value: 'check'},
              {title: 'Bank Transfer', value: 'bank-transfer'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'shipping',
      title: 'Shipping Information',
      type: 'object',
      fields: [
        {
          name: 'shippingPolicy',
          title: 'Shipping Policy',
          type: 'text',
          rows: 4,
        },
        {
          name: 'returnPolicy',
          title: 'Return Policy',
          type: 'text',
          rows: 4,
        },
        {
          name: 'processingTime',
          title: 'Processing Time',
          type: 'string',
          description: 'e.g., "3-5 business days"',
        },
        {
          name: 'shippingCosts',
          title: 'Shipping Costs',
          type: 'text',
          rows: 3,
          description: 'Information about shipping costs and rates',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'defaultMetaTitle',
          title: 'Default Meta Title',
          type: 'string',
          description: 'Default title for pages without specific SEO settings',
        },
        {
          name: 'defaultMetaDescription',
          title: 'Default Meta Description',
          type: 'text',
          rows: 3,
          description: 'Default description for pages without specific SEO settings',
        },
        {
          name: 'googleAnalyticsId',
          title: 'Google Analytics ID',
          type: 'string',
          description: 'GA4 Measurement ID (G-XXXXXXXXXX)',
        },
        {
          name: 'googleTagManagerId',
          title: 'Google Tag Manager ID',
          type: 'string',
          description: 'GTM Container ID (GTM-XXXXXXX)',
        },
      ],
    }),
    defineField({
      name: 'appearance',
      title: 'Appearance',
      type: 'object',
      fields: [
        {
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
          description: 'Hex color code (e.g., #FF6B6B)',
        },
        {
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
          description: 'Hex color code (e.g., #4ECDC4)',
        },
        {
          name: 'accentColor',
          title: 'Accent Color',
          type: 'string',
          description: 'Hex color code (e.g., #45B7D1)',
        },
        {
          name: 'fontFamily',
          title: 'Font Family',
          type: 'string',
          options: {
            list: [
              {title: 'Inter', value: 'inter'},
              {title: 'Open Sans', value: 'open-sans'},
              {title: 'Roboto', value: 'roboto'},
              {title: 'Lato', value: 'lato'},
              {title: 'Poppins', value: 'poppins'},
              {title: 'Montserrat', value: 'montserrat'},
            ],
          },
          initialValue: 'inter',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      media: 'logo',
    },
  },
})
