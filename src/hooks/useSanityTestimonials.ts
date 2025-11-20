import { useState, useEffect, useMemo } from 'react'
import { client, queries } from '../lib/sanity'

interface Testimonial {
  _id: string
  name: string
  position: string
  company: string
  image?: unknown
  content: {
    fr: string
    en: string
  }
  rating: number
  featured: boolean
  order: number
}

export const useSanityTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true
    
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch(queries.testimonials)
        
        if (isMounted) {
          setTestimonials(result || [])
        }
      } catch (err) {
        console.error('❌ Error fetching testimonials from Sanity:', err)
        if (isMounted) {
          setError(err as Error)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchData()
    
    return () => {
      isMounted = false
    }
  }, [])

  // Mémoriser les témoignages pour éviter les re-renders inutiles
  const memoizedTestimonials = useMemo(() => testimonials, [testimonials])

  return { testimonials: memoizedTestimonials, loading, error }
}
