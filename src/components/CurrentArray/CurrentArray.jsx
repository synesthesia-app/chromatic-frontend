import styles from './CurrentArray.css';
import styles2 from '../../index.css';
import { useColorNote } from '../../context/ColorNoteProvider';
import { useUser } from '../../context/UserProvider';
import { useState } from 'react';
import * as Tone from 'tone';
import { createPalette } from '../../services/palettes';

export default function CurrentArray() {
  const {
    colorPalette,
    setPaletteName,
    paletteName,
    setColorObj,
    setColorPalette,
  } = useColorNote();
  console.log('colorPalette :>> ', colorPalette);
  const { userObj, setCurrentColorNav } = useUser();
  console.log('paletteName :>> ', paletteName);
  const [name, setName] = useState('');
  const [tone, setTone] = useState('');
  const [isSequencing, setIsSequencing] = useState(false);

  function handleSwatchClick(swatch) {
    setName(swatch.name);
    setTone(swatch.tone);
    const synth3 = new Tone.Synth().toDestination();
    synth3.triggerAttackRelease(swatch.tone, '4n');
  }

  function handleResetPalette() {
    setColorPalette([]);
    setPaletteName('');
    setName('');
    setTone('');
  }

  async function handleSavePalette(e) {
    e.preventDefault();
    const palette = {
      userId: userObj.id,
      name: paletteName,
      swatchArr: JSON.stringify(colorPalette),
    };

    await createPalette(palette);

    handleResetPalette();

    setCurrentColorNav(false);
  }

  function handlePlayPalette() {
    const synth = new Tone.PolySynth().toDestination();
    const tones = colorPalette.map((swatch) => swatch.tone);
    synth.triggerAttackRelease(tones, 1);
  }

  function handlePlaySequence() {
    setIsSequencing(true);
    let tones = [];
    tones = colorPalette.map((swatch) => swatch.tone);
    console.log('tones', tones);

    const synth = new Tone.Synth().toDestination();
    console.log('synth', synth);

    const seq = new Tone.Sequence((time, note,) => {
      synth.triggerAttackRelease(note, 0.1, time);
    }, tones).start(0);
    console.log('seq', seq);

    Tone.Transport.start();
  }

  function handleStopSequence() {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    setIsSequencing(false);
  }

  return (
    <>
      <section className={styles.arraySection}>
        <form id="colorArray" action="" onSubmit={handleSavePalette}>
          <input
            className={styles.arrayInput}
            type="text"
            placeholder="name your palette"
            value={paletteName}
            required
            onChange={(e) => setPaletteName(e.target.value)}
          />
          <div className={styles.displayArray}>
            <div className={`${styles.arrayContainer} ${styles2.scrollbar}`}>
              {colorPalette.map((swatch, i) => {
                return (
                  <div
                    key={swatch.name + i}
                    className={styles.swatch}
                    style={{
                      backgroundColor: `hsl(${swatch.hue}, ${swatch.sat}%,${swatch.light}%)`,
                    }}
                    title={`${swatch.name}`}
                    onClick={() => handleSwatchClick(swatch)}
                  ></div>
                );
              })}
            </div>
          </div>
          <section className={styles.nameAndButton}>
            <div>
              {name && (
                <h3>
                  {name} - {tone}
                </h3>
              )}
            </div>
          </section>
        </form>
        <div className={styles.itMovesTheButtonsToTheRight}>
          <div className={styles.playPalette}>
            {!userObj.id ? (
              <></>
            ) : (
              <button
                className={styles.saveArray}
                type="submit"
                form="colorArray"
              >
                save palette
              </button>
            )}
            <button className={styles.resetArray} onClick={handleResetPalette}>
              reset palette
            </button>
            <button className={styles.playArray} onClick={handlePlayPalette}>
              play palette
            </button>
            {!isSequencing
              ? <button
                  className={styles.playSequence}
                  onClick={handlePlaySequence}
                >
                play sequence
                </button>
              : <button
                  className={styles.playSequence}
                  onClick={handleStopSequence}
                >
                  stop sequence
                </button>
            }
          </div>
        </div>
      </section>
    </>
  );
}
