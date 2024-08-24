import { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  fields: [
    {
      name: 'order product',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true,
    },
    {
        name: 'order quantity',
        type: 'number',
        required: true,
    },
    {
        name: 'order user',
        type: 'relationship',
        relationTo: 'customers',
        required: true,
    },{
        name: 'order status',
        type: 'select',
        options: [
            'pending',
            'shipped',
            'delivered',
        ],
        required: true,
    },
    {
        name: 'order date',
        type: 'date',
        required: true,
    },
    

   
  ],
  
}