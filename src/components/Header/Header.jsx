import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import styles from './Header.css';
import About from '../About/About';
import Login from '../../views/Login/Login';

export default function Header() {
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
        <p className={styles.welcome}>welcome *USER*</p>
        <div className={styles.routes}>
          <Router>
            <NavLink className={styles.navLink} to="#">
              About
            </NavLink>
            <NavLink className={styles.navLink} to="/github/login">
              Login
            </NavLink>
          </Router>
        </div>
      </div>
    </header>
  );
}
