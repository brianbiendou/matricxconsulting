import {defineField, defineType} from 'sanity'

export const jobOpening = defineType({
  name: 'jobOpening',
  title: 'Job Openings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du poste',
      description: 'Ex: "Consultant(e) en Transformation Digitale" (FR) / "Digital Transformation Consultant" (EN)',
      type: 'object',
      fields: [
        {
          name: 'fr', 
          type: 'string', 
          title: 'Français',
          placeholder: 'Ex: Consultant(e) en Transformation Digitale'
        },
        {
          name: 'en', 
          type: 'string', 
          title: 'English',
          placeholder: 'Ex: Digital Transformation Consultant'
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Localisation',
      description: 'Ex: "Douala, Cameroun" (FR) / "Douala, Cameroon" (EN)',
      type: 'object',
      fields: [
        {
          name: 'fr', 
          type: 'string', 
          title: 'Français',
          placeholder: 'Ex: Douala, Cameroun'
        },
        {
          name: 'en', 
          type: 'string', 
          title: 'English',
          placeholder: 'Ex: Douala, Cameroon'
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type de contrat',
      description: 'Sélectionnez le type de contrat pour ce poste',
      type: 'string',
      options: {
        list: [
          {title: 'CDI', value: 'CDI'},
          {title: 'CDD', value: 'CDD'},
          {title: 'Stage', value: 'Stage'},
          {title: 'Freelance', value: 'Freelance'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Expérience requise',
      description: 'Ex: "3-5 ans" (FR) / "3-5 years" (EN)',
      type: 'object',
      fields: [
        {
          name: 'fr', 
          type: 'string', 
          title: 'Français',
          placeholder: 'Ex: 3-5 ans'
        },
        {
          name: 'en', 
          type: 'string', 
          title: 'English',
          placeholder: 'Ex: 3-5 years'
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description du poste',
      description: 'Description courte affichée sous le titre (optionnel). Ex: "Accompagner nos clients dans leur transformation digitale" (FR) / "Support our clients in their digital transformation" (EN)',
      type: 'object',
      fields: [
        {
          name: 'fr', 
          type: 'text', 
          title: 'Français', 
          rows: 4,
          placeholder: 'Ex: Accompagner nos clients dans leur transformation digitale et l\'optimisation de leurs processus métier.'
        },
        {
          name: 'en', 
          type: 'text', 
          title: 'English', 
          rows: 4,
          placeholder: 'Ex: Support our clients in their digital transformation and business process optimization.'
        },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Poste actif',
      type: 'boolean',
      description: 'Décocher pour masquer le poste du site web sans le supprimer',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Plus le nombre est petit, plus le poste apparaîtra en haut de la liste. Ex: 1, 2, 3...',
      initialValue: 0,
      placeholder: 'Ex: 1'
    }),
  ],
  preview: {
    select: {
      titleFr: 'title.fr',
      titleEn: 'title.en',
      location: 'location.fr',
      type: 'type',
      isActive: 'isActive',
    },
    prepare({titleFr, titleEn, location, type, isActive}) {
      return {
        title: titleFr || titleEn,
        subtitle: `${location} • ${type} ${isActive ? '✓' : '✗ Inactif'}`,
      }
    },
  },
})
