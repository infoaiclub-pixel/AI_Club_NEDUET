import type { CollectionConfig } from 'payload'

export const Integrations: CollectionConfig = {
  slug: 'integrations',

  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },

  admin: {
    useAsTitle: 'name',
  },

  access: {
    read: ({ req }) => req.user?.collection === 'users' && req.user.role === 'admin',
    create: ({ req }) => req.user?.collection === 'users' && req.user.role === 'admin',
    update: ({ req }) => req.user?.collection === 'users' && req.user.role === 'admin',
    delete: ({ req }) => req.user?.collection === 'users' && req.user.role === 'admin',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    }
  ],
}
