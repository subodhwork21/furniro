import type { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
  admin: {
    useAsTitle: 'email',
   
  },
  auth: true,
  fields: [
    {
        name: "email",
        type: 'text',
        required: true,
    },
   {
       name: "image",
       type: 'upload',
    label: 'Customer Image',
    relationTo: "media",

   },
    {
      name: 'username',
      type: 'text',
     
    },
    
    {
      name: 'isactive',
      type: 'select',
      required: true,
      options: [
        "yes","no"
      ],
    },
    {
      name: 'emailverified',
      label: 'Email verified',
      type: 'select',
      required: true,
      options: [
        "no",
       "yes"
      ],
    },
    {
      name: "Cart",
      type: "group",
      fields: [
        {
          name: "Cart_products",
          label: 'Cart Products',
          type: 'array',
          fields: [
            {
              name: 'cart_product',
              label: 'Cart Product',
              type: 'relationship',
              relationTo: 'products',
            },
            {
                name: 'cart_quantity',
                label: 'Cart Quantity',
                type: 'number',
            }],
          }
      
       
      ]
    }
   
    
  ],
}
