import styles from '@/styles/components/layout/Header.module.css';
import Nav from '../nav/nav';

const Header = ({ username, profileImage }) => {

  
  const navLinks = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#interests', label: 'Intereses' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header className={styles.header}>
      <Nav links={navLinks} />
      <div className={styles.profileContainer}>
        <img src={profileImage} alt="Profile" className={styles.profileImg} />
        <h1 className={styles.username}>{username}</h1>
      </div>
    </header>
  );
};

export default Header;
