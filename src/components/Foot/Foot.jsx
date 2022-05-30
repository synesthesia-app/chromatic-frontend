import styles from './Foot.css';

export default function Foot() {
  return (
    <section className={styles.footer}>
      <p>© MMXXII all rights reservered</p>
      <div className={styles.footerLogo}>
        <p className={styles.footerName}>synesthesia</p>
        <img
          className={styles.footImage}
          src="../chromaticLogoOutlineGreenFat.png"
          alt="Outline Chromatic Logo"
        />
      </div>
    </section>
  );
}
