import type { CollectionConfig } from 'payload'

export const Inspiration: CollectionConfig = {
  slug: 'inspiration',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'furniture slides', // required
        type: 'array', // required
        minRows: 2,
        maxRows: 10,
        interfaceName: 'CardSlider', // optional
        labels: {
          singular: 'Slide',
          plural: 'Slides',
        },
        fields: [
          // required
          {
            name: 'title',
            type: 'text',
          },
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
          {
            name: 'caption',
            type: 'text',
          },
        ],
       
      },
  ],
}
