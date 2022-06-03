import { useEffect, useState } from 'react';
import styles from './SavedPalette.css';
import { useColorNote } from '../../context/ColorNoteProvider';
import { deletePaletteById } from '../../services/palettes';

export default function SavedPalette({
  id,
  name, 
  swatchArr,
  setIsDeleting
}) {
  const { setColorPalette, setPaletteName } = useColorNote();
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    const parseData = () => {
      const parsedPalette = JSON.parse(swatchArr);
      setPalette(parsedPalette);
    };
    parseData();
  }, []);

  const handlePaletteClick = () => {
    setPaletteName(name);
    setColorPalette(palette);
  };

  async function handlePaletteDelete() {
    setIsDeleting(true);
    await deletePaletteById(id);
  };

  return (
    <section title={`${name}`} className={styles.paletteContainer}>
      <p className={styles.paletteName}>{name}</p>
      <div className={styles.buttonAndPaletteContainer}>
        <img
          src="./trash@2x.png"
          className={styles.deletePaletteButton}
          onClick={handlePaletteDelete}
        />
        <div className={styles.swatchContainer} onClick={handlePaletteClick}>
          {palette?.map((swatch, i) => {
            return (
              <div
                key={swatch.name + i}
                className={styles.swatch}
                style={{
                  backgroundColor: `hsl(${swatch.hue}, ${swatch.sat}%,${swatch.light}%)`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
