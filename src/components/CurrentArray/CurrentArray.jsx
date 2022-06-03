import { useState } from 'react';
import * as Tone from 'tone';
import { useColorNote } from '../../context/ColorNoteProvider';
import { useUser } from '../../context/UserProvider';
import styles2 from '../../index.css';
import { createPalette } from '../../services/palettes';
import styles from './CurrentArray.css';

export default function CurrentArray() {
  const { colorPalette, setPaletteName, paletteName, setColorPalette } =
    useColorNote();

  const { userObj, setCurrentColorNav } = useUser();
  const [name, setName] = useState('');
  const [tone, setTone] = useState('');
  const [swatchIndex, setSwatchIndex] = useState('');
  const [isSequencing, setIsSequencing] = useState(false);

  function handleSwatchClick(swatch, index) {
    setName(swatch.name);
    setTone(swatch.tone);
    setSwatchIndex(index);
    const synth3 = new Tone.Synth().toDestination();
    synth3.triggerAttackRelease(swatch.tone, '4n');
  }

  function handleSwatchDelete() {
    const filteredPalette = colorPalette.filter(
      (swatch, index) => index != swatchIndex
    );
    setColorPalette(filteredPalette);
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

    const synth = new Tone.Synth().toDestination();

    new Tone.Sequence((time, note) => {
      synth.triggerAttackRelease(note, 0.1, time);
    }, tones).start(0);

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
              {colorPalette.map((swatch, index) => {
                return (
                  <div
                    key={swatch.name + index}
                    className={styles.swatch}
                    style={{
                      backgroundColor: `hsl(${swatch.hue}, ${swatch.sat}%,${swatch.light}%)`,
                    }}
                    title={`${swatch.name}`}
                    onClick={() => handleSwatchClick(swatch, index)}
                  ></div>
                );
              })}
            </div>
          </div>
          <section className={styles.nameAndButton}></section>
        </form>
        <div className={styles.labelAndButtons}>
          <div className={styles.nameAndTone}>
            {name && (
              <div className={styles.iconAndLabel}>
                <img
                  src="./trash@2x.png"
                  alt=""
                  className={styles.trashIcon}
                  onClick={handleSwatchDelete}
                />
                <h3>
                  {name} - {tone}
                </h3>
              </div>
            )}
          </div>
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
              <button
                className={styles.resetArray}
                onClick={handleResetPalette}
              >
                reset palette
              </button>
              <button className={styles.playArray} onClick={handlePlayPalette}>
                play palette
              </button>
              {!isSequencing ? (
                <button
                  className={styles.playSequence}
                  onClick={handlePlaySequence}
                >
                  play sequence
                </button>
              ) : (
                <button
                  className={styles.playSequence}
                  onClick={handleStopSequence}
                >
                  stop sequence
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
