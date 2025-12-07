import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

export interface JobOpening {
  _id: string
  title: {
    fr: string
    en: string
  }
  location: {
    fr: string
    en: string
  }
  type: string
  experience: {
    fr: string
    en: string
  }
  description?: {
    fr: string
    en: string
  }
  isActive: boolean
  order: number
}

export const useSanityJobOpenings = () => {
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchJobOpenings = async () => {
      try {
        const query = `*[_type == "jobOpening" && isActive == true] | order(order asc) {
          _id,
          title,
          location,
          type,
          experience,
          description,
          isActive,
          order
        }`
        
        const data = await client.fetch(query)
        setJobOpenings(data)
        setLoading(false)
      } catch (err) {
        setError(err as Error)
        setLoading(false)
      }
    }

    fetchJobOpenings()
  }, [])

  return { jobOpenings, loading, error }
}
