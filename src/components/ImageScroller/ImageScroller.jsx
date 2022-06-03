import { useUser } from '../../context/UserProvider';
import styles2 from '../../index.css';
import { defaultArray } from './defaultArray';
import styles from './ImageScroller.css';

export default function ImageScroller() {
  const { imagesContainer, setDisplayedImage, userObj } = useUser();

  const handleImageSwap = (e) => {
    setDisplayedImage(e.target.alt);
  };

  let userIs;
  userObj.id ? (userIs = imagesContainer) : (userIs = defaultArray);

  return (
    <>
      <section className={styles.imageScroller}>
        <div className={`${styles.showImages} ${styles2.scrollbar}`}>
          {userIs.map((image) => {
            return (
              <img
                key={image}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
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
