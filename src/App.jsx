import * as Tone from 'tone';
import { EyeDropper } from 'react-eyedrop';
import { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Cloud from './views/Cloud'
import ImgUpload from './views/ImgUpload'
import hexToHSL from './utils/hex-to-hsl';
import hslToNote from './utils/hsl-to-note';

export default function App() {
  const [pickedColor, setPickedColor] = useState('#bada55');

  function getColor({ rgb, hex }) {
    const synth = new Tone.Synth().toDestination();

    setPickedColor(hex);
    const { h, l } = hexToHSL(hex);
    console.log('hl', h, l)
    const noteOct = hslToNote(h, l);
    synth.triggerAttackRelease(noteOct, '4n');

    // console.log(rgb, hex);
  }


  const handleClick = () => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();
    const synth2 = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('C4', '4n');
    synth2.triggerAttackRelease('E5', '1n');
  };

  return (
    <>
          <Cloud />
          {/* <ImgUpload /> */}

      <button onClick={handleClick}>Play sound</button>
      <input
        type="color"
        onChange={(event) => console.log(event.target.value)}
      />
      <EyeDropper onChange={getColor} once={false}/>
      <img src="./color-wheel.png" alt="" width='600px'/>
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
      >

      </div>

    </>
  );
}
