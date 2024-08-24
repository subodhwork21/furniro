import { CollectionConfig } from 'payload'

export const Cart: CollectionConfig = {
  slug: 'cart',
  admin: {
    useAsTitle: 'Cart name',
  },
  
  fields: [
    {
      name: 'cart_product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
        name: 'quantity',
        label: 'Quantity',
        type: 'number',
        required: true,
    },
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'customers',
      required: true,
    },
    
  ],
  
}