import { useState, useEffect } from 'react';
import { fetchCourses } from '../services/api';

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCourses() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCourses();
        if (!cancelled) setCourses(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadCourses();
    return () => { cancelled = true; };
  }, []);

  return { courses, loading, error };
}