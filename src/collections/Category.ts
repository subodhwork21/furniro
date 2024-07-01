import { CollectionConfig } from 'payload'

export const Category: CollectionConfig = {
  slug: 'category',
  admin: {
    useAsTitle: 'category name',
  },
  
  fields: [
    {
      name: 'category name',
      label: 'Category Name',
      type: 'text',
      required: true,
    },
    {
        name: 'category image',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },
    {
    name: 'category description',
        type: 'textarea',
        required: true,
    },
    
  ],
  
}