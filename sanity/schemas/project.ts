import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projets Marquants',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du projet',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Français', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Français', type: 'text', rows: 3},
        {name: 'en', title: 'English', type: 'text', rows: 3},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'impact',
      title: 'Impact / Résultat',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Français', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Durée',
      type: 'string',
      description: 'Ex: 18 mois, 6 mois',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Mots-clés du projet (ex: Télécom, CX, Analytics)',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Image du projet',
      type: 'image',
      description: 'Image illustrative du projet (optionnel)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Ordre d\'apparition (plus petit = affiché en premier)',
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
      subtitle: 'client',
      order: 'order',
    },
    prepare({title, subtitle, order}) {
      return {
        title: `${title} (${order})`,
        subtitle,
      }
    },
  },
})
