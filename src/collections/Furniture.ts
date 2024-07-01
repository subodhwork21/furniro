import type { CollectionConfig } from 'payload'

export const Furniture: CollectionConfig = {
  slug: 'furniture',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
