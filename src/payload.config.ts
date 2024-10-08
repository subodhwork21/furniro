// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Product'
import { Category } from './collections/Category'
import { Furniture } from './collections/Furniture'
import { Orders } from './collections/Orders'
import { Inspiration } from './collections/Inspiration'
import { GridImages } from './collections/GridImages'
import { Customers } from './collections/Customers'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Cart } from "./collections/Cart";



const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [ Users, Media, Products, Category, Furniture, Orders, Inspiration, GridImages, Customers, Cart ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        [Media.slug]: true,
        [Furniture.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    })
    // storage-adapter-placeholder
  ],
})
