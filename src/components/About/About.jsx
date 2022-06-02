import React from 'react';
import profPic from '../../assets/Marx1.jpg';
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>ABOUT US</h1>
        <div className={styles.aboutBioContainer}>
          <div style={{color: 'crimson'}} className={styles.aboutBio}>
            <h2>Sam Benatovich</h2>
            <img src={profPic} alt="" />
            <div className={styles.aboutBioLinks}>
              <a 
                className={`${styles.aboutBioLink} ${styles.sam}`}
                // href="https://www.linkedin.com/in/"
              >
                LinkedIn
              </a>{' '}
              <br></br>
              {' '}
              <a 
                className={`${styles.aboutBioLink} ${styles.sam}`}
                // href="https://github.com/"
              >
                GitHub
              </a>
            </div>
            <p>
              Placeholder bio about me. insert details here.
            </p>
          </div>
          <div style={{color: 'orange'}} className={styles.aboutBio}>
            <h2>Arma Burton</h2>
            <img src={profPic} alt="" />
            <div className={styles.aboutBioLinks}>
              <a 
                className={`${styles.aboutBioLink} ${styles.arma}`}
                // href="https://www.linkedin.com/in/"
              >
                LinkedIn
              </a>{' '}
              <br/>{' '}
              <a 
                className={`${styles.aboutBioLink} ${styles.arma}`}
                // href="https://github.com/"
              >
                GitHub
              </a>
            </div>
            <p>
              Placeholder bio about me. insert details here.
            </p>
          </div>
          <div style={{color: 'yellow'}} className={styles.aboutBio}>
            <h2>Philippe Ngom</h2>
            <img src={profPic} alt="" />
            <div className={styles.aboutBioLinks}>
              <a 
                className={`${styles.aboutBioLink} ${styles.phil}`}
                // href="https://www.linkedin.com/in/"
              >
                LinkedIn
              </a>{' '}
              <br/>{' '}
              <a 
                className={`${styles.aboutBioLink} ${styles.phil}`}
                // href="https://github.com/"
              >
                GitHub
              </a>
            </div>
            <p>
              Placeholder bio about me. insert details here.
            </p>
          </div>
          <div style={{color: 'chartreuse'}} className={styles.aboutBio}>
            <h2>Clayton Knapp</h2>
            <img src={profPic} alt="" />
            <div className={styles.aboutBioLinks}>
              <a 
                className={`${styles.aboutBioLink} ${styles.clayton}`}
                // href="https://www.linkedin.com/in/"
              >
                LinkedIn
              </a>{' '}
              <br/>{' '}
              <a 
                className={`${styles.aboutBioLink} ${styles.clayton}`}
                // href="https://github.com/"
              >
                GitHub
              </a>
            </div>
            <p>
              Placeholder bio about me. insert details here.
            </p>
          </div>
          <div style={{color: 'cyan'}} className={styles.aboutBio}>
            <h2>Alex Blair</h2>
            <img src={profPic} alt="" />
            <div className={styles.aboutBioLinks}>
              <a 
                className={`${styles.aboutBioLink} ${styles.alex}`}
                // href="https://www.linkedin.com/in/"
              >
                LinkedIn
              </a>{' '}
              <br/>{' '}
              <a 
                className={`${styles.aboutBioLink} ${styles.alex}`}
                // href="https://github.com/"
              >
                GitHub
              </a>
            </div>
            <p>
              Placeholder bio about me. insert details here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
