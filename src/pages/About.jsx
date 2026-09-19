import styles from './About.module.css';

export default function About() {
  return (
    <section className={`container ${styles.about}`}>
      <p className="mono">ABOUT</p>
      <h1>Built for course discovery.</h1>
      <p className={styles.lead}>
        UniLearn is a course catalog and registration platform designed
        to make browsing academic offerings simple and transparent.
      </p>

      <div className={styles.grid}>
        <div>
          <h3>Our Mission</h3>
          <p>
            Give students a clear, up-to-date view of every course on
            offer — without digging through scattered department pages.
          </p>
        </div>
        <div>
          <h3>How It Works</h3>
          <p>
            Course data is pulled live from our catalog service, so
            listings, schedules, and enrollment numbers stay current.
          </p>
        </div>
        <div>
          <h3>Who It's For</h3>
          <p>
            Current students planning next semester, and prospective
            students exploring what a department has to offer.
          </p>
        </div>
      </div>
    </section>
  );
}