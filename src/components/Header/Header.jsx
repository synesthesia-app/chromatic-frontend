import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import styles from './Header.css';
import About from '../About/About';
import Login from '../../views/Login/Login';

export default function Header() {
  return (
    <header>
        <div className={styles.brand}>
          <div className={styles.logo}></div>
          <div className={styles.logoType}></div>
        </div>
        <div className={styles.auth}>
          <nav>
            <p>welcome *USER*</p>
            <Router>
              <Route path="#">
                <About />
              </Route>

              <Route path="/github/login">
                <Login />
              </Route>
            </Router>
          </nav>
        </div>
      </header>
  )
};
