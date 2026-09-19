import { Link } from 'react-router-dom';
import styles from './CourseCard.module.css';

const deptColors = {
  'Computer Science': 'var(--dept-cs)',
  'Engineering': 'var(--dept-eng)',
  'Business': 'var(--dept-business)',
};

export default function CourseCard({ course }) {
  const accentColor = deptColors[course.department] || 'var(--color-accent)';

  return (
    <Link to={`/courses/${course.id}`} className={styles.card}>
      <div className={styles.codeBlock} style={{ background: accentColor }}>
        <span className="mono">{course.code}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.department}>{course.department} · {course.level}</p>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.instructor}>{course.instructor}</p>
        <div className={styles.meta}>
          <span className="mono">{course.credits} credits</span>
          <span className="mono">{course.duration}</span>
        </div>
      </div>
    </Link>
  );
}