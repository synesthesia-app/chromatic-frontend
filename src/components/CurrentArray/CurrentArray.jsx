import styles from './CurrentArray.css';

export default function CurrentArray() {
  return (
    <>
      <section className={styles.arraySection}>
        <input
          className={styles.arrayInput}
          type="text"
          placeholder="name your array"
        />
        <div className={styles.displayArray}>
          <div className={styles.showArray}></div>
        </div>
        <div className={styles.saveArray}>save array</div>
      </section>
    </>
  );
}
