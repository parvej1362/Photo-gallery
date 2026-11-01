import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch photos from Picsum Photos API.
 * 
 * Returns:
 * - photos: array of fetched photo objects
 * - loading: boolean indicating if the request is pending
 * - error: string message if request failed, otherwise null
 */
export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Flag to prevent state updates if component unmounts
    let isMounted = true;

    async function fetchPhotos() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://picsum.photos/v2/list?limit=30');

        if (!response.ok) {
          throw new Error(`Failed to fetch photos (Status: ${response.status})`);
        }

        const data = await response.json();

        if (isMounted) {
          setPhotos(data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Something went wrong while fetching photos.');
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures photos are fetched only once on mount

  return { photos, loading, error };
}
