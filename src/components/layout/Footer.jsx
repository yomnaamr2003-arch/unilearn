import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className="mono">&copy; 2026 UniLearn</p>
        <p>Course catalog & academic registration</p>
      </div>
    </footer>
  );
}