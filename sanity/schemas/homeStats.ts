import {defineField, defineType} from 'sanity'

export const homeStats = defineType({
  name: 'homeStats',
  title: 'Statistiques Page d\'Accueil',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre (pour identification)',
      type: 'string',
      initialValue: 'Chiffres Clés Accueil',
      readOnly: true,
    }),
    defineField({
      name: 'clients',
      title: 'Nombre de clients satisfaits',
      type: 'string',
      description: 'Ex: 100+',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Années d\'expérience',
      type: 'string',
      description: 'Ex: 3 ans',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'satisfaction',
      title: 'Taux de satisfaction',
      type: 'string',
      description: 'Ex: 95%',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Chiffres Clés - Page d\'Accueil',
      }
    },
  },
})
