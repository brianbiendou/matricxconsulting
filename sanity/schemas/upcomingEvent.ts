import {defineField, defineType} from 'sanity'

export const upcomingEvent = defineType({
  name: 'upcomingEvent',
  title: 'Événements à Venir',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de l\'événement',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Français', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date de l\'événement',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lieu',
      type: 'string',
      description: 'Ex: Douala, Cameroun',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rôle MatriCx',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Français', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
      description: 'Ex: Keynote Speaker, Panel Moderator, Sponsor',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Lien vers l\'événement',
      type: 'url',
      description: 'URL de la page de l\'événement (optionnel)',
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Affiché',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title.fr',
      subtitle: 'location',
      date: 'date',
    },
    prepare({title, subtitle, date}) {
      return {
        title,
        subtitle: `${date} - ${subtitle}`,
      }
    },
  },
})
