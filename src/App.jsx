import * as Tone from 'tone';
import { EyeDropper } from 'react-eyedrop';
import { useState } from 'react';

export default function App() {
  const [pickedColor, setPickedColor] = useState('#bada55');

  function getColor({ rgb, hex }) {
    setPickedColor(hex);
    console.log(rgb, hex);
  }

  const handleClick = () => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();
    const synth2 = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('C4', '4n');
    synth2.triggerAttackRelease('E4', '4n');
  };

  return (
    <>
      <button onClick={handleClick}>Play sound</button>
      <EyeDropper onChange={getColor} />
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
