import {defineField, defineType} from 'sanity'

export const podcastStats = defineType({
  name: 'podcastStats',
  title: 'Statistiques Podcast',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre (pour identification)',
      type: 'string',
      initialValue: 'Statistiques Podcast',
      readOnly: true,
    }),
    defineField({
      name: 'episodes',
      title: 'Nombre d\'épisodes',
      type: 'string',
      description: 'Ex: 20+',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'listeners',
      title: 'Nombre d\'auditeurs',
      type: 'string',
      description: 'Ex: 5K+',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Note',
      type: 'string',
      description: 'Ex: 4.8',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Statistiques Podcast MatriCx',
      }
    },
  },
})
