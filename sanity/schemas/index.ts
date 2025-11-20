import {blogPost} from './blogPost'
import {testimonial} from './testimonial'
import {blockContent} from './blockContent'
import {partner} from './partner'
import {teamMember} from './teamMember'
import {homeStats} from './homeStats'
import {podcastStats} from './podcastStats'
import {experienceStats} from './experienceStats'
import {project} from './project'
import {pressRelease} from './pressRelease'
import {mediaAppearance} from './mediaAppearance'
import {upcomingEvent} from './upcomingEvent'

export const schemas = [
  // Contenu éditorial
  blogPost,
  testimonial,
  
  // Équipe et partenaires
  partner,
  teamMember,
  
  // Projets et réalisations
  project,
  
  // Médias
  pressRelease,
  mediaAppearance,
  upcomingEvent,
  
  // Statistiques
  homeStats,
  podcastStats,
  experienceStats,
  
  // Composants
  blockContent,
]
