import { useState, useEffect } from 'react';
import { sanityClient } from './sanityClient';

export const useSanityTestimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "testimonial"] | order(order asc) {
        _id,
        quote,
        author,
        position,
        company,
        image
      }`)
      .then((data) => setTestimonials(data || []))
      .catch(console.error);
  }, []);

  return { testimonials };
};
