import {defineField, defineType} from 'sanity'

export const pressRelease = defineType({
  name: 'pressRelease',
  title: 'Communiqués de Presse',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Français', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source / Média',
      type: 'string',
      description: 'Ex: Business Africa Journal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date de publication',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Lien vers l\'article',
      type: 'url',
      description: 'URL complète de l\'article',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https']
      }),
    }),
    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'string',
      description: 'Type d\'icône: video, podcast, ou article',
      options: {
        list: [
          {title: 'Vidéo', value: 'video'},
          {title: 'Podcast', value: 'podcast'},
          {title: 'Article', value: 'article'},
        ],
      },
      initialValue: 'article',
      validation: (Rule) => Rule.required(),
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
      subtitle: 'source',
      date: 'date',
    },
    prepare({title, subtitle, date}) {
      return {
        title,
        subtitle: `${subtitle} - ${date}`,
      }
    },
  },
})
