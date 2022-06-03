import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserProvider';
import { getPalettesByUserId } from '../../services/palettes';
import SavedPalette from '../SavedPalette/SavedPalette';
import styles from './SavedColors.css';

export default function SavedColors() {
  const { userObj } = useUser();
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    getPalettesByUserId(userObj?.id).then(setPalettes);
  }, []);

  return (
    <>
      <div className={styles.savedColors}>
        {palettes?.map((palette) => (
          <SavedPalette
            key={palette.id}
            id={palette.id}
            name={palette.name}
            swatchArr={palette.swatchArr}
          />
        ))}
      </div>
    </>
  );
}
