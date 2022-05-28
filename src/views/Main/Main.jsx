import React from 'react';
import Cloud from '../Cloud';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import styles from './Main.css';
import * as Tone from 'tone';
import { useTone } from '../../context/ToneProvider.jsx';
import { EyeDropper, useEyeDrop } from 'react-eyedrop';
import { useState } from 'react';
import CurrentColor from '../CurrentColor/CurrentColor';
import SavedColors from '../SavedColors/SavedColors';

export default function Main() {
  const { userColor, setUserColor, currentColor, setCurrentColor } = useTone();

  const [colors, pickColor, cancelPickColor] = useEyeDrop({
    once: false,
    pickRadius: 10,
    cursorActive: 'crosshair',
    cursorInactive: 'default',
  });
  const [currentColorNav, setCurrentColorNav] = useState(true);

  function handleCurrentClick() {
    setCurrentColorNav(true);
  }

  function handleSavedClick() {
    setCurrentColorNav(false);
  }

  const isActive = {
    backgroundColor: 'var(--brt-pink)',
    border: '2px solid var(--brt-pink)',
    borderBottom: 'none',
  };

  const isNotActive = {
    backgroundColor: 'var(--drk-grey)',
    border: '2px solid var(--brt-pink)',
    borderBottom: 'none',
  };

  return (
    <section className={styles.main}>
      <div className={styles.interactImage}>
        <Cloud />
      </div>

      <div className={styles.infoPanel}>
        <div className={styles.holdsButtons}>
          <div
            className={`${styles.ccButton} ${styles.buttonStyle}`}
            style={currentColorNav ? isActive : isNotActive}
            onClick={handleCurrentClick}
          >
            Current Color
          </div>
          <div
            className={`${styles.scButton} ${styles.buttonStyle}`}
            style={currentColorNav ? isNotActive : isActive}
            onClick={handleSavedClick}
          >
            Saved Colors
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.info}>
            {currentColorNav ? <CurrentColor /> : <SavedColors />}
          </div>
        </div>
      </div>
    </section>
  );
}
