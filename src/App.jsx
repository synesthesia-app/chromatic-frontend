import * as Tone from 'tone';

export default function App() {
  const handleClick = () => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();
    const synth2 = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('C4', '4n');
    synth2.triggerAttackRelease('E4', '4n');
  };

  return <button onClick={handleClick}>Play sound</button>;
}
