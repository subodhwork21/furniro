import { CollectionConfig } from 'payload'
import { FieldHook } from 'payload';

const formatSlug: FieldHook = async ({ value, data }) => {
  return (
    data?.product_name
      ?.replace(/[^a-zA-Z0-9]+/g, "-")
      ?.toLowerCase()
      ?.replace(/^-+|-+$/g, "") ?? value
  );
};

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'product_name',
    

  },
  fields: [
    {
      name: 'product_name',
      label: 'Product Name',
      type: 'text',
      required: true,
    },
    {
      name: 'product_slug',
      type: 'text',
      hooks: {
        beforeChange: [
         formatSlug
        ],
      },
      admin: {
        readOnly: true
      }
      
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