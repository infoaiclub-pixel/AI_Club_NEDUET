import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
     read: ({ req }) => Boolean(req.user),
      create: ({ req }) => req.user?.collection === 'users',
      update: ({ req }) => req.user?.collection === 'users',
      delete: ({ req }) => req.user?.collection === 'users'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Controls tab order in UI',
      },
    },
  ],
}
