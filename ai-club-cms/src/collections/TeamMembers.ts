import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: ({ req }) => {
      // Human users (Admin UI & logged-in users) → full access
      if (req.user?.collection === 'users') {
        return true
      }

      // Integration users → only non-deleted documents
      if (req.user?.collection === 'integrations') {
        return {
          isDeleted: {
            equals: false,
          },
        }
      }
      // Everyone else → no access
      return false
    },

    // Only human users can mutate
    create: ({ req }) => req.user?.collection === 'users',
    update: ({ req }) => req.user?.collection === 'users',
    delete: ({ req }) => req.user?.collection === 'users',
  },


  fields: [
    {
      name: 'isDeleted',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'linkedinUrl',
      type: 'text',
    },
  ],
}
