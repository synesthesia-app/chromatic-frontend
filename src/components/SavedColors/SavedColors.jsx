import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserProvider';
import { getPalettesByUserId } from '../../services/palettes';
import SavedPalette from '../SavedPalette/SavedPalette';
import styles from './SavedColors.css';

export default function SavedColors() {
  const { userObj } = useUser();
  const [palettes, setPalettes] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  

  useEffect(() => {
    getPalettesByUserId(userObj?.id)
      .then(setPalettes);
    setIsDeleting(false);
  }, [isDeleting, palettes]);

  return (
    <>
      <div className={styles.savedColors}>
        {palettes?.map((palette) => (
          <SavedPalette
            key={palette.id}
            id={palette.id}
            name={palette.name}
            swatchArr={palette.swatchArr}
            setIsDeleting={setIsDeleting}
          />
        ))}
      </div>
    </>
  );
}
