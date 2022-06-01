import React from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  useHistory,
} from 'react-router-dom';
import styles from './Header.css';
import About from '../About/About';
import Login from '../../views/Login/Login';
import { useUser } from '../../context/UserProvider';

export default function Header() {
  const { userObj, logout } = useUser();
  const history = useHistory();

  useEffect(() => {
    console.log(`|| userObj >`, userObj);
  }, [userObj]);

  const handleLogout = async () => {
    await logout();
    history.push('/');
  };

  return (
    <header>
      <div className={styles.brand}>
        <img
          className={styles.logo}
          src="../../chromaticLogoFullColor.png"
          alt="chromatic-logo"
        />
        <h1 className={styles.logoType}>CHROMATIC</h1>
      </div>
      <div className={styles.auth}>
        <p className={styles.welcome}>
          {userObj.username ? `welcome ${userObj.username}` : 'Please sign in'}
        </p>
        <div className={styles.routes}>
          <Router>
            <NavLink className={styles.navLink} to="#">
              About
            </NavLink>
            {userObj?.username ? (
              <div className={styles.navLink} onClick={handleLogout}>
                Logout
              </div>
            ) : (
              <div className={styles.navLink}>Login</div>
            )}
          </Router>
        </div>
      </div>
    </header>
  );
}
