import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';
import AuthButton from '../AuthButton/AuthButton';
import styles from './Header.css';

export default function Header() {
  const { userObj } = useUser();

  return (
    <header>
      <div className={styles.brand}>
        <Link className={styles.logoStuff} to="/main">
          <img
            className={styles.logo}
            src="../../chromaticLogoFullColor.png"
            alt="chromatic-logo"
          />
          <h1 className={styles.logoType}>CHROMATIC</h1>
        </Link>
      </div>
      <div className={styles.auth}>
        <p className={styles.welcome}>
          {userObj?.username ? `welcome ${userObj.username}` : 'Please sign in'}
        </p>
        <div className={styles.routes}>
          <Link className={styles.navLink} to="/about">
            About
          </Link>
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
