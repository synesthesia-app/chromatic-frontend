import React from 'react';
import Cloud from '../Cloud';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import styles from './Main.css';
import * as Tone from 'tone';
import { useTone } from '../../context/ToneProvider.jsx';
import { EyeDropper, useEyeDrop } from 'react-eyedrop';
import { useState } from 'react';


export default function Main() {
  const { userColor, setUserColor } = useTone();

  const [colors, pickColor, cancelPickColor] = useEyeDrop({
    once: false,
    pickRadius: 10,
    cursorActive: 'crosshair',
    cursorInactive: 'default',
  });
  const [currentColorNav, setCurrentColorNav] = useState(true);
  const [pickedColor, setPickedColor] = useState('#bada55');

  function handleCurrentClick() {
    setCurrentColorNav(true);
    setSavedColorNav(false);
  }

  function handleSavedClick() {
    setCurrentColorNav(false);
    setSavedColorNav(true);
  }


  return (
    <section className={styles.main}>
        <div className={styles.interactImage}>
          <Cloud />
          <input
            type="color"
            onChange={(event) => console.log(event.target.value)}
          />
        </div>
        
        <div className={styles.infoPanel}>
          <div>
            <Router>
              <NavLink
                to="#"
                className={styles.currentColor}
                onClick={handleCurrentClick}
              >
                Current Color
              </NavLink>
              <NavLink
                to="#"
                className={styles.savedColor}
                onClick={handleSavedClick}
              >
                Saved Color
              </NavLink>
            </Router>
          </div>
          <div className={styles.infoSection}>
            {currentColorNav ? (
              <div className={styles.info}>
                <div
                  style={{
                    height: '4rem',
                    width: '100%',
                    backgroundColor: `${pickedColor}`,
                  }}
                ></div>
              </div>
            ) : (
              <div className={styles.info}>
                <div
                  style={{
                    height: '4rem',
                    width: '100%',
                    backgroundColor: 'black',
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
      </section>
  )
};
