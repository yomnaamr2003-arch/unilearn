import styles from './Contact.module.css';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={`mono ${styles.eyebrow}`}>
            GET IN TOUCH
          </p>

          <h1 className={styles.title}>
            We're here to help.
          </h1>

          <p className={styles.subtitle}>
            Questions about a course, enrollment, or a department?
            Send us a message and we'll get back to you.
          </p>
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.grid}>

          <div className={styles.info}>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📍</span>

              <h3>Campus</h3>

              <p>
                UniLearn Main Campus, Academic Building 2
              </p>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>✉️</span>

              <h3>Email</h3>

              <p>
                admissions@unilearn.edu
              </p>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🕒</span>

              <h3>Office Hours</h3>

              <p>
                Sunday – Thursday, 9am – 4pm
              </p>
            </div>

          </div>

          <div className={styles.formPanel}>
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}