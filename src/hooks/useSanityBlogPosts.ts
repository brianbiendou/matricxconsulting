import { useState, useEffect } from 'react';
import { sanityClient } from './sanityClient';

export const useSanityBlogPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        category,
        readTime,
        mainImage,
        body
      }`)
      .then((data) => {
        setPosts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { posts, loading };
};

export const useSanityBlogPost = (slug: string) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    sanityClient
      .fetch(`*[_type == "blogPost" && slug.current == "${slug}"][0]{
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        category,
        readTime,
        mainImage,
        body
      }`)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  return { post, loading, error };
};
