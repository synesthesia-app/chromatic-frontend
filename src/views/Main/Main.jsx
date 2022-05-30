import React from 'react';
import Playground from '../../components/Playground/Playground.jsx';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import styles from './Main.css';
import * as Tone from 'tone';
import { useTone } from '../../context/ToneProvider.jsx';
import { EyeDropper, useEyeDrop } from 'react-eyedrop';
import { useState, useEffect } from 'react';
import CurrentColor from '../../components/CurrentColor/CurrentColor';
import SavedColors from '../../components/SavedColors/SavedColors';
import CurrentArray from '../../components/CurrentArray/CurrentArray';
import ImageScroller from '../../components/ImageScroller/ImageScroller';
import colorAPI from '../../services/colorAPI';
import ColorPanel from '../../components/ColorPanel/ColorPanel.jsx';

export default function Main() {
  const { userColor, setUserColor, currentColor, setCurrentColor } = useTone();

  const [colors, pickColor, cancelPickColor] = useEyeDrop({
    once: false,
    pickRadius: 10,
    cursorActive: 'crosshair',
    cursorInactive: 'default',
  });
  // const [currentColorNav, setCurrentColorNav] = useState(true);

  // function handleCurrentClick() {
  //   setCurrentColorNav(true);
  // }

  // function handleSavedClick() {
  //   setCurrentColorNav(false);
  // }

  // const isActive = {
  //   color: 'var(--brt-green)',
  //   borderTop: '2px solid var(--brt-green)',
  //   borderLeft: '2px solid var(--brt-green)',
  //   borderRight: '2px solid var(--brt-green)',
  //   borderBottom: 'none',
  //   cursor: 'default',
  // };

  // const isNotActive = {
  //   color: 'var(--brt-pink)',
  //   borderTop: '2px solid var(--brt-pink)',
  //   borderLeft: '2px solid var(--brt-pink)',
  //   borderRight: '2px solid var(--brt-pink)',
  //   borderBottom: 'none',
  //   cursor: 'pointer',
  // };
  // function handleMouseEnter(e) {
  //   e.preventDefault();
  //   e.target.style.background = '#f0b';
  //   e.target.style.color = '#292929';
  // }

  // function handleMouseLeave(e) {
  //   e.preventDefault();
  //   e.target.style.background = '#292929';
  //   e.target.style.color = '#f0b';
  // }

  // function handleMouseDown(e) {
  //   e.preventDefault();
  //   e.target.style.background = '#00fbff';
  //   e.target.style.color = `#292929`;
  // }

  // function handleMouseUp(e) {
  //   e.preventDefault();
  //   e.target.style.background = '#292929';
  //   e.target.style.color = `#f09`;
  // }

  return (
    <>
      <section className={styles.main}>
        <div className={styles.interactImage}>
          <Playground />
        </div>
        <ColorPanel />
        {/* <div className={styles.infoPanel}>
          <div className={styles.holdsButtons}>
            <div
              className={`${styles.ccButton} ${styles.buttonStyle}`}
              onMouseEnter={!currentColorNav ? handleMouseEnter : () => {}}
              onMouseLeave={!currentColorNav ? handleMouseLeave : () => {}}
              onMouseDown={!currentColorNav ? handleMouseDown : () => {}}
              onMouseUp={!currentColorNav ? handleMouseUp : () => {}}
              style={currentColorNav ? isActive : isNotActive}
              onClick={handleCurrentClick}
            >
              Current Color
            </div>
            <div
              className={`${styles.scButton} ${styles.buttonStyle}`}
              onMouseEnter={currentColorNav ? handleMouseEnter : () => {}}
              onMouseLeave={currentColorNav ? handleMouseLeave : () => {}}
              onMouseDown={currentColorNav ? handleMouseDown : () => {}}
              onMouseUp={currentColorNav ? handleMouseUp : () => {}}
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
        </div> */}
      </section>
      <CurrentArray />
      <ImageScroller />
    </>
  );
}
