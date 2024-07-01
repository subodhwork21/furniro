import type { CollectionConfig } from 'payload'

export const GridImages: CollectionConfig = {
  slug: 'gridimages',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'Grid Images Slides', // required
        type: 'array', // required
        minRows: 10,
        maxRows: 15,
        interfaceName: 'CardSlider', // optional
        labels: {
          singular: 'Slide',
          plural: 'Slides',
        },
        fields: [
          // required
          {
            name: 'image',
            type: 'upload',
            relationTo: 'furniture',
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
