import styles from './ImageScroller.css';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserProvider';
import { CloudInstance } from '../../services/Cloudinary';
import { defaultArray } from './defaultArray';

export default function ImageScroller() {
  const { imagesContainer, setDisplayedImage, userObj } = useUser();

  useEffect(() => {
    console.log(`|| imagesContainer >`, imagesContainer);
  }, []);

  const handleImageSwap = (e) => {
    setDisplayedImage(e.target.alt);
  };

  let userIs;
  userObj.id ? (userIs = imagesContainer) : (userIs = defaultArray);

  return (
    <>
      <section className={styles.imageScroller}>
        <div className={styles.showImages}>
          {userIs.map((image) => {
            return (
              <img
                key={image}
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                src={image.imageName}
                alt={image.publicId}
                onClick={handleImageSwap}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
