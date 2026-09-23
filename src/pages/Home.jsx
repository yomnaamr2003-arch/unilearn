import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const stats = [
  { icon: '🎓', number: '12,000+', label: 'Students Enrolled' },
  { icon: '🏛️', number: '3', label: 'Departments' },
  { icon: '📚', number: '40+', label: 'Active Courses' },
  { icon: '📈', number: '95%', label: 'Graduate Employment' },
];

const departments = [
  { name: 'Computer Science', desc: 'Software, AI, and systems design.', color: 'var(--dept-cs)' },
  { name: 'Engineering', desc: 'Structures, energy, and mechanics.', color: 'var(--dept-eng)' },
  { name: 'Business', desc: 'Strategy, finance, and marketing.', color: 'var(--dept-business)' },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className={`mono ${styles.eyebrow}`}>ACADEMIC YEAR 2026–2027</p>
            <h1 className={styles.title}>A Legacy of Excellence.<br /><span>A Future of Impact.</span></h1>
            <p className={styles.subtitle}>
              Browse the UniLearn course catalog — explore departments, instructors, course details, and everything you need to plan your semester.
            </p>
            <div className={styles.actions}>
              <Link to="/courses" className={styles.ctaPrimary}>Explore Courses →</Link>
              <Link to="/about" className={styles.ctaSecondary}>About UniLearn</Link>
            </div>
          </div>
          <div
            className={styles.heroImage}
            style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/c/cd/University-of-Alabama-EngineeringResearchCenter-01.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original')` }}
          />
        </div>
      </section>

     <section className={styles.stats}>
  <div className={`container ${styles.statsGrid}`}>
    {stats.map((s) => (
      <div key={s.label} className={styles.stat}>
        <span className={styles.statIcon}>{s.icon}</span>
        <span className={styles.statNumber}>{s.number}</span>
        <span className={styles.statLabel}>{s.label}</span>
      </div>
    ))}
  </div>
</section>

      <section className={`container ${styles.departments}`}>
        <p className={`mono ${styles.eyebrow}`}>OUR DEPARTMENTS</p>
        <h2 className={styles.sectionTitle}>Find Your Path</h2>
        <div className={styles.deptGrid}>
          {departments.map((d) => (
           <Link to={`/courses?department=${encodeURIComponent(d.name)}`} key={d.name} className={styles.deptCard}>
              <div className={styles.deptBar} style={{ background: d.color }} />
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <span className={styles.deptLink}>Explore →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}