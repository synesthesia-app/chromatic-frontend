import * as Tone from 'tone';
import { EyeDropper, useEyeDrop } from 'react-eyedrop';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Cloud from './views/Cloud';
import ImgUpload from './views/ImgUpload';
import hexToHSL from './utils/hex-to-hsl';
import hslToNote from './utils/hsl-to-note';
import { useTone } from './context/ToneProvider';
import styles from './App.css';

export default function App() {
  const { userColor, setUserColor } = useTone();

  const [colors, pickColor, cancelPickColor] = useEyeDrop({
    once: false,
    pickRadius: 10,
    cursorActive: 'crosshair',
    cursorInactive: 'default',
  });

  const [pickedColor, setPickedColor] = useState('#bada55');

  function getColorMakeSound({ rgb, hex }) {
    const synth = new Tone.Synth().toDestination();
    setPickedColor(hex);
    const { h, s, l } = hexToHSL(hex);
    const { oct, note } = hslToNote(h, l);
    setUserColor((prev) => {
      return [
        ...prev,
        { hsl: `${h}`, sat: `${s}`, light: `${l}`, tone: note + oct },
      ];
    });
    synth.triggerAttackRelease(note + oct, '4n');
  }

  return (
    <section>
      <Cloud />
      {/* <ImgUpload /> */}
      {/* <button onClick={handleClick}>Play sound</button> */}
      <input
        type="color"
        onChange={(event) => console.log(event.target.value)}
      />
      <EyeDropper
        buttonClasses="eye-dropper"
        onChange={getColorMakeSound}
        once={false}
      >
        Eye Dropper
      </EyeDropper>
      {/* <img src="./color-wheel.svg" alt="" width="600px" /> */}
      <div
        style={{
          height: '4rem',
          width: '100%',
          backgroundColor: `${pickedColor}`,
        }}
      ></div>
    </section>
  );
}
