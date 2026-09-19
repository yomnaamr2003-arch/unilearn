import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          UniLearn
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? styles.active : ''}>Courses</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}