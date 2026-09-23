import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>

        <NavLink to="/" className={styles.logo}>
          UniLearn
        </NavLink>

        {/* Desktop Menu */}
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
            About
          </NavLink>

          <NavLink to="/courses" className={({ isActive }) => isActive ? styles.active : ''}>
            Courses
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Three Dots */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ⋮
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className={styles.mobileMenu}>
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/courses"
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        )}

      </div>
    </header>
  );
}