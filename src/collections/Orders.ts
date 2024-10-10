import { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  fields: [
    {
      label: "order product",
      name: 'order_product',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true,
    },
    {
        label: "order quantity",
        name: 'order_quantity',
        type: 'number',
        required: true,
    },
    {
      label: "order user",
        name: 'order_user',
        type: 'relationship',
        relationTo: 'customers',
        required: true,
    },{
      label: "order status",
        name: 'order_status',
        type: 'select',
        options: [
            'pending',
            'shipped',
            'delivered',
        ],
        required: true,
    },
    {
      label: "order date",
        name: 'order_date',
        type: 'date',
        required: true,
    },
    

   
  ],
  
}