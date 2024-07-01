import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'product name',

  },
  fields: [
    {
      name: 'product name',
      type: 'text',
      required: true,
    },
    {
        name: 'product price',
        type: 'number',
        required: true,
    },
    {
        name: 'product image',
        type: 'upload',
        relationTo: 'furniture',
        required: true,
    },
    {
    name: 'product description',
        type: 'textarea',
        required: true,
    },
    {
        name: 'product category',
        type: 'relationship',
        relationTo: 'category',
        required: true,
    },
    {
        name: 'product price before discount',
        type: 'number',
        },
    {
        name: 'quantity',
        type: 'number',
        required: true,
    },
    {
        name: "product type",
        type: 'select',
        options: [
            'new',
            'hot',
            'sale',
        ]
    }

   
  ],
  
}