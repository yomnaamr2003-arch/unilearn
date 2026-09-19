import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <p className={`mono ${styles.eyebrow}`}>ACADEMIC YEAR 2026–2027</p>
        <h1 className={styles.title}>Find your next course.</h1>
        <p className={styles.subtitle}>
          Browse the full UniLearn catalog — departments, instructors,
          schedules, and everything you need to plan your semester.
        </p>
        <Link to="/courses" className={styles.cta}>View Courses →</Link>
      </section>

      <section className={`container ${styles.features}`}>
        <div className={styles.feature}>
          <h3>Wide Catalog</h3>
          <p>Courses across Computer Science, Engineering, and Business.</p>
        </div>
        <div className={styles.feature}>
          <h3>Live Data</h3>
          <p>Enrollment and schedule details pulled in real time.</p>
        </div>
        <div className={styles.feature}>
          <h3>Simple Registration</h3>
          <p>Reach out through Contact for enrollment questions.</p>
        </div>
      </section>
    </>
  );
}