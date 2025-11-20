import { useState, useEffect } from 'react'
import { client, queries, urlFor } from '../lib/sanity'

interface Partner {
  _id: string
  name: string
  logo: unknown
  website?: string
  order: number
}

export const useSanityPartners = () => {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch(queries.partners)
        setPartners(result || [])
      } catch (err) {
        console.error('Error fetching partners from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { partners, loading, error, urlFor }
}

interface TeamMember {
  _id: string
  name: string
  position: { fr: string; en: string }
  photo: unknown
  description: { fr: string; en: string }
  order: number
}

export const useSanityTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch(queries.teamMembers)
        setTeamMembers(result || [])
      } catch (err) {
        console.error('Error fetching team members from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { teamMembers, loading, error, urlFor }
}

interface HomeStats {
  clients: string
  experience: string
  satisfaction: string
}

interface HomeStat {
  value: string
  label: { fr: string; en: string }
}

export const useSanityHomeStats = () => {
  const [homeStats, setHomeStats] = useState<HomeStat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result: HomeStats | null = await client.fetch(queries.homeStats)
        
        if (result) {
          // Transformer les données Sanity en tableau de stats
          const statsArray: HomeStat[] = [
            { 
              value: result.clients, 
              label: { fr: 'Clients satisfaits', en: 'Satisfied clients' } 
            },
            { 
              value: result.experience, 
              label: { fr: 'Ans d\'expérience', en: 'Years of experience' } 
            },
            { 
              value: result.satisfaction, 
              label: { fr: 'Satisfaction client', en: 'Client satisfaction' } 
            }
          ]
          setHomeStats(statsArray)
        }
      } catch (err) {
        console.error('Error fetching home stats from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { homeStats, loading, error }
}

interface PodcastStats {
  episodes: string
  listeners: string
  rating: string
}

interface PodcastStat {
  value: string
  label: { fr: string; en: string }
}

export const useSanityPodcastStats = () => {
  const [podcastStats, setPodcastStats] = useState<PodcastStat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result: PodcastStats | null = await client.fetch(queries.podcastStats)
        
        if (result) {
          // Transformer les données Sanity en tableau de stats
          const statsArray: PodcastStat[] = [
            { 
              value: result.episodes, 
              label: { fr: 'Épisodes', en: 'Episodes' } 
            },
            { 
              value: result.listeners, 
              label: { fr: 'Auditeurs', en: 'Listeners' } 
            },
            { 
              value: result.rating + '⭐', 
              label: { fr: 'Note', en: 'Rating' } 
            }
          ]
          setPodcastStats(statsArray)
        }
      } catch (err) {
        console.error('Error fetching podcast stats from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { podcastStats, loading, error }
}

interface ExperienceStats {
  projects: string
  countries: string
  satisfaction: string
  impact: string
}

interface ExperienceStat {
  value: string
  label: { fr: string; en: string }
}

export const useSanityExperienceStats = () => {
  const [experienceStats, setExperienceStats] = useState<ExperienceStat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result: ExperienceStats | null = await client.fetch(queries.experienceStats)
        
        if (result) {
          // Transformer les données Sanity en tableau de stats
          const statsArray: ExperienceStat[] = [
            { 
              value: result.projects, 
              label: { fr: 'Projets Réalisés', en: 'Completed Projects' } 
            },
            { 
              value: result.countries, 
              label: { fr: 'Pays Africains', en: 'African Countries' } 
            },
            { 
              value: result.satisfaction, 
              label: { fr: 'Clients Satisfaits', en: 'Satisfied Clients' } 
            },
            { 
              value: result.impact, 
              label: { fr: 'Impact Généré', en: 'Generated Impact' } 
            }
          ]
          setExperienceStats(statsArray)
        }
      } catch (err) {
        console.error('Error fetching experience stats from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { experienceStats, loading, error }
}

interface Project {
  _id: string
  title: { fr: string; en: string }
  client: string
  description: { fr: string; en: string }
  impact: { fr: string; en: string }
  duration: string
  tags: string[]
  image?: unknown
  order: number
}

export const useSanityProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch(queries.projects)
        setProjects(result || [])
      } catch (err) {
        console.error('Error fetching projects from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { projects, loading, error, urlFor }
}

interface PressRelease {
  _id: string
  title: { fr: string; en: string }
  source: string
  date: string
  link: string
  icon: 'video' | 'podcast' | 'article'
  order: number
}

export const useSanityPressReleases = () => {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch(queries.pressReleases)
        setPressReleases(result || [])
      } catch (err) {
        console.error('Error fetching press releases from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { pressReleases, loading, error }
}

interface MediaAppearance {
  _id: string
  title: { fr: string; en: string }
  media: string
  date: string
  link: string
  type: 'video' | 'podcast' | 'article'
  order: number
}

export const useSanityMediaAppearances = () => {
  const [mediaAppearances, setMediaAppearances] = useState<MediaAppearance[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch(queries.mediaAppearances)
        setMediaAppearances(result || [])
      } catch (err) {
        console.error('Error fetching media appearances from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { mediaAppearances, loading, error }
}

interface UpcomingEvent {
  _id: string
  title: { fr: string; en: string }
  date: string
  location: string
  role: { fr: string; en: string }
  link?: string
  order: number
}

export const useSanityUpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch(queries.upcomingEvents)
        setUpcomingEvents(result || [])
      } catch (err) {
        console.error('Error fetching upcoming events from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { upcomingEvents, loading, error }
}
