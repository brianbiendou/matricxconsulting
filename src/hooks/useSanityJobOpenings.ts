import { useState, useEffect } from 'react';
import { sanityClient } from './sanityClient';

export const useSanityJobOpenings = () => {
  const [jobOpenings, setJobOpenings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "jobOpening"] | order(publishedAt desc) {
        _id,
        title,
        department,
        location,
        type,
        description,
        requirements,
        publishedAt
      }`)
      .then((data) => {
        setJobOpenings(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { jobOpenings, loading };
};
