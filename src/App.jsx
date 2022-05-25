import * as Tone from 'tone';
import { EyeDropper } from 'react-eyedrop';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Cloud from './views/Cloud';
import ImgUpload from './views/ImgUpload';
import hexToHSL from './utils/hex-to-hsl';
import hslToNote from './utils/hsl-to-note';
import { useTone } from './context/ToneProvider';

export default function App() {
  const { userColor, setUserColor } = useTone();

  const [pickedColor, setPickedColor] = useState('#bada55');

  function getColorMakeSound({ rgb, hex }) {
    const synth = new Tone.Synth().toDestination();
    setUserColor((prev) => {
      return [...prev, pickedColor];
    });
    setPickedColor(hex);
    const { h, l } = hexToHSL(hex);
    const { oct, note } = hslToNote(h, l);
    synth.triggerAttackRelease(note + oct, '4n');
  }

  useEffect(() => {
    console.log(`|| userColor >`, userColor);
  }, [userColor]);

  return (
    <>
      <Cloud />
      {/* <ImgUpload /> */}

      {/* <button onClick={handleClick}>Play sound</button> */}
      <input
        type="color"
        onChange={(event) => console.log(event.target.value)}
      />
      <EyeDropper onChange={getColorMakeSound} once={false} />
      <img src="./color-wheel.svg" alt="" width="600px" />
      <div
        style={{ height: '4rem', backgroundColor: 'yellow' }}
        className="yellow"
      >
        Yellow
      </div>
      <div style={{ height: '4rem', backgroundColor: 'blue' }} className="blue">
        Blue
      </div>
      <div style={{ height: '4rem', backgroundColor: 'red' }} className="red">
        Red
      </div>
      <div
        style={{
          height: '4rem',
          width: '100%',
          backgroundColor: `${pickedColor}`,
        }}
      ></div>
    </>
  );
}
