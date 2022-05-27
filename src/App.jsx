import * as Tone from 'tone';
import { EyeDropper, useEyeDrop } from 'react-eyedrop';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Cloud from './views/Cloud';
import ImgUpload from './views/ImgUpload';
import hexToHSL from './utils/hex-to-hsl';
import hslToNote from './utils/hsl-to-note';
import { useTone } from './context/ToneProvider';
import About from './components/About/About';
import Login from './components/Login/Login';
import styles from './App.css';

export default function App() {
  const { userColor, setUserColor } = useTone();

  const [colors, pickColor, cancelPickColor] = useEyeDrop({
    once: false,
    pickRadius: 10,
    cursorActive: 'crosshair',
    cursorInactive: 'default',
  });
  const [currentColorNav, setCurrentColorNav] = useState(true);
  const [savedColorNav, setSavedColorNav] = useState(false);
  const [pickedColor, setPickedColor] = useState('#bada55');

  // function getColorMakeSound({ rgb, hex }) {
  //   const synth = new Tone.Synth().toDestination();
  //   setPickedColor(hex);
  //   const { h, s, l } = hexToHSL(hex);
  //   const { oct, note } = hslToNote(h, l);
  //   setUserColor((prev) => {
  //     return [
  //       ...prev,
  //       { hsl: `${h}`, sat: `${s}`, light: `${l}`, tone: note + oct },
  //     ];
  //   });
  //   synth.triggerAttackRelease(note + oct, '4n');
  // }

  function handleCurrentClick() {
    setCurrentColorNav(true);
    setSavedColorNav(false);
  }

  function handleSavedClick() {
    setCurrentColorNav(false);
    setSavedColorNav(true);
  }

  return (
    <>
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
      <section className={styles.main}>
        <div className={styles.interactImage}>
          {/* <EyeDropper
            buttonClasses="eye-dropper"
            onChange={getColorMakeSound}
            once={false}
          >
            Eye Dropper
          </EyeDropper> */}
          <Cloud />
          {/* <ImgUpload /> */}
          {/* <button onClick={handleClick}>Play sound</button> */}
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

        {/* <img src="./color-wheel.svg" alt="" width="600px" /> */}
      </section>
    </>
  );
}
