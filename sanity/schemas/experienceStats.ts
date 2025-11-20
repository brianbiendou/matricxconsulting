import {defineField, defineType} from 'sanity'

export const experienceStats = defineType({
  name: 'experienceStats',
  title: 'Statistiques Page Expérience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre (pour identification)',
      type: 'string',
      initialValue: 'Statistiques Expérience',
      readOnly: true,
    }),
    defineField({
      name: 'projects',
      title: 'Projets réalisés',
      type: 'string',
      description: 'Ex: 200+',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'countries',
      title: 'Pays africains',
      type: 'string',
      description: 'Ex: 15+',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'satisfaction',
      title: 'Clients satisfaits',
      type: 'string',
      description: 'Ex: 95%',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'impact',
      title: 'Impact généré',
      type: 'string',
      description: 'Ex: 50M€+',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Statistiques - Page Expérience',
      }
    },
  },
})
