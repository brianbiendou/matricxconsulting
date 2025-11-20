import {defineField, defineType} from 'sanity'

export const mediaAppearance = defineType({
  name: 'mediaAppearance',
  title: 'Apparitions Médiatiques',
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
      name: 'media',
      title: 'Média',
      type: 'string',
      description: 'Ex: Africa Business Channel, Tech Africa Podcast',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'url',
      description: 'URL vers l\'apparition (vidéo, podcast, article)',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https']
      }),
    }),
    defineField({
      name: 'type',
      title: 'Type d\'apparition',
      type: 'string',
      options: {
        list: [
          {title: 'Vidéo', value: 'video'},
          {title: 'Podcast', value: 'podcast'},
          {title: 'Article', value: 'article'},
        ],
      },
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
      subtitle: 'media',
      type: 'type',
    },
    prepare({title, subtitle, type}) {
      return {
        title,
        subtitle: `${subtitle} (${type})`,
      }
    },
  },
})
