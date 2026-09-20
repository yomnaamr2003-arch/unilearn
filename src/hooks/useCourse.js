import { useState, useEffect } from 'react';
import { fetchCourseById } from '../services/api';

export function useCourse(id) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCourse() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCourseById(id);
        if (!cancelled) setCourse(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadCourse();
    return () => { cancelled = true; };
  }, [id]);

  return { course, loading, error };
}