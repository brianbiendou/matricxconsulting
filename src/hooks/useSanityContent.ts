import { useState, useEffect } from 'react';
import { sanityClient, urlFor as sanityUrlFor } from './sanityClient';

// Hook for Home Stats
export const useSanityHomeStats = () => {
  const [homeStats, setHomeStats] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "homeStats"][0]`)
      .then((data) => setHomeStats(data))
      .catch(console.error);
  }, []);

  return { homeStats };
};

// Hook for Team Members
export const useSanityTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "teamMember"] | order(order asc) {
        _id,
        name,
        position,
        description,
        photo
      }`)
      .then((data) => setTeamMembers(data || []))
      .catch(console.error);
  }, []);

  return { teamMembers, urlFor: sanityUrlFor };
};

// Hook for Partners
export const useSanityPartners = () => {
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "partner"] | order(order asc) {
        _id,
        name,
        logo,
        url
      }`)
      .then((data) => setPartners(data || []))
      .catch(console.error);
  }, []);

  return { partners, urlFor: sanityUrlFor };
};

// Hook for Experience Stats
export const useSanityExperienceStats = () => {
  const [experienceStats, setExperienceStats] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "experienceStats"][0]`)
      .then((data) => setExperienceStats(data))
      .catch(console.error);
  }, []);

  return { experienceStats };
};

// Hook for Projects
export const useSanityProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project"] | order(order asc) {
        _id,
        title,
        description,
        image,
        category,
        client,
        year
      }`)
      .then((data) => setProjects(data || []))
      .catch(console.error);
  }, []);

  return { projects, urlFor: sanityUrlFor };
};

// Hook for Press Releases
export const useSanityPressReleases = () => {
  const [pressReleases, setPressReleases] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "pressRelease"] | order(publishedAt desc) {
        _id,
        title,
        summary,
        publishedAt,
        url
      }`)
      .then((data) => setPressReleases(data || []))
      .catch(console.error);
  }, []);

  return { pressReleases };
};

// Hook for Media Appearances
export const useSanityMediaAppearances = () => {
  const [mediaAppearances, setMediaAppearances] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "mediaAppearance"] | order(date desc) {
        _id,
        title,
        type,
        date,
        url,
        image,
        description
      }`)
      .then((data) => setMediaAppearances(data || []))
      .catch(console.error);
  }, []);

  return { mediaAppearances };
};

// Hook for Upcoming Events
export const useSanityUpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "upcomingEvent"] | order(date asc) {
        _id,
        title,
        date,
        location,
        description,
        url
      }`)
      .then((data) => setUpcomingEvents(data || []))
      .catch(console.error);
  }, []);

  return { upcomingEvents };
};

// Hook for Podcast Stats
export const useSanityPodcastStats = () => {
  const [podcastStats, setPodcastStats] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "podcastStats"][0]`)
      .then((data) => setPodcastStats(data))
      .catch(console.error);
  }, []);

  return { podcastStats };
};
