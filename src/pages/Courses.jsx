import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCourses } from '../hooks/useCourses';
import CourseCard from '../components/courses/CourseCard';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import styles from './Courses.module.css';

const departments = ['All', 'Computer Science', 'Engineering', 'Business'];

export default function Courses() {
  const { courses, loading, error } = useCourses();
  const [searchParams] = useSearchParams();
  const deptFromUrl = searchParams.get('department');

  const [activeDept, setActiveDept] = useState(
    departments.includes(deptFromUrl) ? deptFromUrl : 'All'
  );
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesDept = activeDept === 'All' || c.department === activeDept;
      const matchesSearch = c.title?.toLowerCase().includes(search.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [courses, activeDept, search]);

  return (
    <section className="container" style={{ paddingTop: 'var(--space-lg)', paddingBottom: 'var(--space-xl)' }}>
      <div className={styles.pageHeader}>
  <p className={`mono ${styles.eyebrow}`}>BROWSE THE CATALOG</p>
  <h1>Course Catalog</h1>
  <p className={styles.pageSubtitle}>Browse courses across every department, updated live.</p>
</div>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
        <div className={styles.filters}>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={activeDept === dept ? styles.filterActive : styles.filter}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {loading && <Loader message="Loading courses..." />}
      {error && <ErrorMessage message={error} onRetry={() => window.location.reload()} />}

      {!loading && !error && filtered.length === 0 && (
        <p className={styles.empty}>No courses match your search.</p>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className={styles.grid}>
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}