import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

/**
 * Hook avec auto-refresh pour les données Sanity
 * Garde le CDN actif mais vérifie les changements régulièrement
 */
export const useSanityWithRefresh = (query: string, refreshInterval = 30000) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(query)
        setData(result)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    // Fetch initial
    fetchData()

    // Auto-refresh
    const interval = setInterval(fetchData, refreshInterval)

    return () => clearInterval(interval)
  }, [query, refreshInterval])

  return { data, loading, error }
}

// Exemple d'utilisation :
// const { data } = useSanityWithRefresh(queries.homeStats, 30000) // Refresh toutes les 30s
