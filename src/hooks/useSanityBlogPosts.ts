import { useState, useEffect } from 'react'
import { client, queries } from '../lib/sanity'

interface BlogPost {
  _id: string
  title: {
    fr: string
    en: string
  }
  slug: {
    current: string
  }
  mainImage?: unknown
  excerpt: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fr: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    en: any
  }
  content: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fr: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    en: any
  }
  author?: string
  publishedAt: string
  category: 'cx' | 'strategie' | 'digital' | 'formation' | 'etudes'
  tags?: string[]
  featured: boolean
}

export const useSanityBlogPosts = (featured: boolean = false) => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const query = featured ? queries.featuredBlogPosts : queries.allBlogPosts
        const result = await client.fetch(query)
        setPosts(result || [])
      } catch (err) {
        console.error('Error fetching blog posts from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [featured])

  return { posts, loading, error }
}

export const useSanityBlogPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch(queries.blogPostBySlug(slug))
        setPost(result)
      } catch (err) {
        console.error('Error fetching blog post from Sanity:', err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchData()
    }
  }, [slug])

  return { post, loading, error }
}
