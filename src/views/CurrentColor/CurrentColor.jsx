import { useTone } from '../../context/ToneProvider';
import styles from './CurrentColor.css';

export default function CurrentColor() {
  const { pickedColor } = useTone();
  return (
    <>
      <div
        className={styles.displayCurrentColor}
        style={{
          backgroundColor: `${pickedColor}`,
        }}
      ></div>
    </>
  );
}
