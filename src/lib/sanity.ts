import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Configuration du client Sanity
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'ozf76xbs',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-11-19',
  useCdn: false, // Désactivé pour avoir les données fraîches instantanément
  token: import.meta.env.VITE_SANITY_TOKEN, // Token pour les opérations d'écriture
})

// Helper pour générer les URLs d'images optimisées
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Requêtes GROQ utiles
export const queries = {
  // Articles de blog (tous)
  allBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    content,
    author,
    publishedAt,
    category,
    tags,
    featured
  }`,

  // Article de blog (un seul)
  blogPostBySlug: (slug: string) => `*[_type == "blogPost" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    content,
    author,
    publishedAt,
    category,
    tags,
    featured
  }`,

  // Articles mis en avant
  featuredBlogPosts: `*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    author,
    publishedAt,
    category
  }`,

  // Témoignages
  testimonials: `*[_type == "testimonial" && featured == true] | order(order asc){
    _id,
    name,
    position,
    company,
    image,
    content,
    rating,
    featured,
    order
  }`,

  // Tous les témoignages
  allTestimonials: `*[_type == "testimonial"] | order(order asc){
    _id,
    name,
    position,
    company,
    image,
    content,
    rating,
    featured,
    order
  }`,

  // Partenaires (logos carousel)
  partners: `*[_type == "partner" && featured == true] | order(order asc){
    _id,
    name,
    logo,
    website,
    order
  }`,

  // Membres de l'équipe
  teamMembers: `*[_type == "teamMember" && featured == true] | order(order asc){
    _id,
    name,
    position,
    photo,
    description,
    order
  }`,

  // Statistiques page d'accueil
  homeStats: `*[_type == "homeStats"][0]{
    clients,
    experience,
    satisfaction
  }`,

  // Statistiques podcast
  podcastStats: `*[_type == "podcastStats"][0]{
    episodes,
    listeners,
    rating
  }`,

  // Statistiques page expérience
  experienceStats: `*[_type == "experienceStats"][0]{
    projects,
    countries,
    satisfaction,
    impact
  }`,

  // Projets marquants
  projects: `*[_type == "project" && featured == true] | order(order asc){
    _id,
    title,
    client,
    description,
    impact,
    duration,
    tags,
    image,
    order
  }`,

  // Communiqués de presse
  pressReleases: `*[_type == "pressRelease" && featured == true] | order(date desc){
    _id,
    title,
    source,
    date,
    link,
    icon,
    order
  }`,

  // Apparitions médiatiques
  mediaAppearances: `*[_type == "mediaAppearance" && featured == true] | order(date desc){
    _id,
    title,
    media,
    date,
    link,
    type,
    order
  }`,

  // Événements à venir
  upcomingEvents: `*[_type == "upcomingEvent" && featured == true] | order(date asc){
    _id,
    title,
    date,
    location,
    role,
    link,
    order
  }`,
}
