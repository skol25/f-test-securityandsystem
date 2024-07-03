"use client";
import { useState } from 'react';
import styles from '@/styles/components/layout/Nav.module.css';

const Nav = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <button className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <ul className={styles.navList}>
          {links.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <a href={link.href} className={styles.navLink} onClick={toggleMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
