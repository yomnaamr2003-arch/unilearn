import { useParams, Link } from 'react-router-dom';
import { useCourse } from '../hooks/useCourse';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import styles from './CourseDetail.module.css';

const deptColors = {
  'Computer Science': 'var(--dept-cs)',
  'Engineering': 'var(--dept-eng)',
  'Business': 'var(--dept-business)',
};

export default function CourseDetail() {
  const { id } = useParams();
  const { course, loading, error } = useCourse(id);

  if (loading) return <Loader message="Loading course..." />;
  if (error) return <ErrorMessage message={error} />;
  if (!course) return <ErrorMessage message="Course not found." />;

  const accentColor = deptColors[course.department] || 'var(--color-accent)';

  return (
    <>
      <div className={styles.hero} style={{ background: accentColor }}>
        <div className={`container ${styles.heroInner}`}>
          <Link to="/courses" className={styles.back}>← Back to Courses</Link>
          <span className={`mono ${styles.code}`}>{course.code}</span>
          <h1 className={styles.title}>{course.title}</h1>
          <div className={styles.badges}>
            <span className={styles.badge}>{course.department}</span>
            <span className={styles.badge}>{course.level}</span>
            <span className={styles.badge}>{course.instructor}</span>
          </div>
        </div>
      </div>

      <section className={`container ${styles.body}`}>
        <div className={styles.grid}>
          <div className={styles.main}>
            <h3 className={styles.sectionLabel}>Description</h3>
            <p className={styles.description}>{course.description}</p>
          </div>

          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Course Info</h3>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Credits</span>
              <span className={`mono ${styles.statValue}`}>{course.credits}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Duration</span>
              <span className={`mono ${styles.statValue}`}>{course.duration}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Enrolled</span>
              <span className={`mono ${styles.statValue}`}>{course.enrolled} students</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}