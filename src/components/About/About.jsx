import React from 'react';
import profPic from '../../assets/Marx1.jpg';
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>ABOUT US</h1>
        <div className={styles.aboutBioContainer}>
          <div style={{ color: 'crimson' }} className={styles.aboutBio}>
            <h2>Sam Benatovich</h2>
            <img src={'../../sam.jpeg'} alt="" />
            <div className={styles.aboutBioLinks}>
              <a
                className={`${styles.aboutBioLink} ${styles.sam}`}
                href="https://www.linkedin.com/in/sam-benatovich/"
              >
                LinkedIn
              </a>{' '}
              <br></br>{' '}
              <a
                className={`${styles.aboutBioLink} ${styles.sam}`}
                href="https://github.com/Benatovich"
              >
                GitHub
              </a>
            </div>
            <p>
              Sam is a creative problem solver who tends to see obstacles as
              puzzles waiting to be solved. Software engineering has been a
              natural fit for Sam and he is continuously evolving his proclivity
              for solving puzzles.
            </p>
          </div>
          <div style={{ color: 'orange' }} className={styles.aboutBio}>
            <h2>Arma Burton</h2>
            <img src={'../../arma.jpeg'} alt="" />
            <div className={styles.aboutBioLinks}>
              <a
                className={`${styles.aboutBioLink} ${styles.arma}`}
                href="https://www.linkedin.com/in/arma-burton/"
              >
                LinkedIn
              </a>{' '}
              <br />{' '}
              <a
                className={`${styles.aboutBioLink} ${styles.arma}`}
                href="https://github.com/armaBurton"
              >
                GitHub
              </a>
            </div>
            <p>
              Arma Burton is a software developer in Portland, OR. He is a
              former constructioneer and graphic-designer pursuing a more
              rewarding career with upward mobility. He has two legs from his
              hips to the ground and when he moves them he walks around.
            </p>
          </div>
          <div style={{ color: 'yellow' }} className={styles.aboutBio}>
            <h2>Philippe Ngom</h2>
            <img src={'../../phil.jpeg'} alt="" />
            <div className={styles.aboutBioLinks}>
              <a
                className={`${styles.aboutBioLink} ${styles.phil}`}
                href="https://www.linkedin.com/in/philippe-ngom/"
              >
                LinkedIn
              </a>{' '}
              <br />{' '}
              <a
                className={`${styles.aboutBioLink} ${styles.phil}`}
                href="https://github.com/philngom"
              >
                GitHub
              </a>
            </div>
            <p>
              Philippe Ngom is a software developer in Seattle, WA. He has a
              decade of military experience as an industrial maintainer. He
              enjoys collaborating and building useful applications.
            </p>
          </div>
          <div style={{ color: 'chartreuse' }} className={styles.aboutBio}>
            <h2>Clayton Knapp</h2>
            <img src={'../../clayton.jpeg'} alt="" />
            <div className={styles.aboutBioLinks}>
              <a
                className={`${styles.aboutBioLink} ${styles.clayton}`}
                href="https://www.linkedin.com/in/clayton-knapp/"
              >
                LinkedIn
              </a>{' '}
              <br />{' '}
              <a
                className={`${styles.aboutBioLink} ${styles.clayton}`}
                href="https://github.com/clayton-knapp"
              >
                GitHub
              </a>
            </div>
            <p>
              Clayton is a Full-Stack Software Engineer living in Portland. His
              love for photography and music drew him to the Chromatica app
              idea. He believes in making the web a more accessible place for
              all users and a more sustainable place for art and creativity.
              Clayton recognizes the magic of creating code on a well
              functioning and communicating team and is excited about
              integrating his drive and work ethic into a career in software
              development.
            </p>
          </div>
          <div style={{ color: 'cyan' }} className={styles.aboutBio}>
            <h2>Alex Blair</h2>
            <img src={'../../alex.png'} alt="" />
            <div className={styles.aboutBioLinks}>
              <a
                className={`${styles.aboutBioLink} ${styles.alex}`}
                href="https://www.linkedin.com/in/alexander-blair-a72a10ab/"
              >
                LinkedIn
              </a>{' '}
              <br />{' '}
              <a
                className={`${styles.aboutBioLink} ${styles.alex}`}
                href="https://github.com/alex-i-blair"
              >
                GitHub
              </a>
            </div>
            <p>
              Alex Blair is a software developer in Portland, OR. He has over 2
              decades of customer facing experience in the food and beverage
              industry in Portland. In 2021, he decided to part ways from the
              restaurant world and pursue a career in software development at
              Alchemy Code Labs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
