import { Link } from 'react-router-dom';
import styles from './About.module.css';

const values = [
  { icon: '🎯', title: 'Our Mission', text: 'Give students a clear, up-to-date view of every course on offer — without digging through scattered department pages.' },
  { icon: '⚡', title: 'How It Works', text: 'Course data is pulled live from our catalog service, so listings, schedules, and enrollment numbers stay current.' },
  { icon: '🎓', title: 'Who It\'s For', text: 'Current students planning next semester, and prospective students exploring what a department has to offer.' },
];

const milestones = [
  { year: '2020', text: 'UniLearn founded to simplify course discovery across departments.' },
  { year: '2023', text: 'Catalog expanded to cover Computer Science, Engineering, and Business.' },
  { year: '2026', text: 'Live API integration launched, replacing static, outdated listings.' },
];

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className={`mono ${styles.eyebrow}`}>ABOUT UNILEARN</p>
            <h1 className={styles.title}>Built for course discovery.</h1>
            <p className={styles.subtitle}>
              UniLearn is a course catalog and registration platform designed
              to make browsing academic offerings simple and transparent —
              for every student, in every department.
            </p>
          </div>
          <div
            className={styles.heroImage}
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80')` }}
          />
        </div>
      </section>

      <section className={`container ${styles.values}`}>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.story}>
        <div className={`container ${styles.storyGrid}`}>
          <div
            className={styles.storyImage}
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80')` }}
          />
          <div>
            <p className={`mono ${styles.eyebrow}`}>OUR STORY</p>
            <h2 className={styles.storyTitle}>From a scattered catalog to one platform.</h2>
            <p className={styles.storyText}>
              Before UniLearn, course information was spread across department
              pages, PDFs, and outdated spreadsheets. We built a single, live
              catalog so students spend less time searching and more time
              planning their academic path.
            </p>
            <div className={styles.timeline}>
              {milestones.map((m) => (
                <div key={m.year} className={styles.milestone}>
                  <span className={`mono ${styles.milestoneYear}`}>{m.year}</span>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2>Ready to plan your semester?</h2>
          <p>Browse the full catalog and find your next course.</p>
          <Link to="/courses" className={styles.ctaButton}>View Courses →</Link>
        </div>
      </section>
    </>
  );
}