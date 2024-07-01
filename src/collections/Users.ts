import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
   
  },
  
  
  auth: true,
  fields: [
    {
      name: 'username',
      type: 'text',
     
    },
    
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        'user',
        'admin',
        'editor',
        'developer',
      ],
    },
    {
      name: 'email verified',
      type: 'select',
      required: true,
      options: [
        "no",
       "yes"
      ],
    },
    // Email added by default
    // Add more fields as needed
  ],
}
