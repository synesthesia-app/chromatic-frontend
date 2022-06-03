import { useUser } from '../../context/UserProvider.jsx';
import CurrentColor from '../CurrentColor/CurrentColor';
import SavedColors from '../SavedColors/SavedColors';

import styles from './ColorPanel.css';

export default function ColorPanel() {
  const { userObj, currentColorNav, setCurrentColorNav } = useUser();

  const isActive = {
    color: 'var(--brt-green)',
    borderTop: '2px solid var(--brt-green)',
    borderLeft: '2px solid var(--brt-green)',
    borderRight: '2px solid var(--brt-green)',
    borderBottom: 'none',
    cursor: 'default',
  };

  const isNotActive = {
    color: 'var(--brt-pink)',
    borderTop: '2px solid var(--brt-pink)',
    borderLeft: '2px solid var(--brt-pink)',
    borderRight: '2px solid var(--brt-pink)',
    borderBottom: 'none',
    cursor: 'pointer',
  };

  function handleCurrentClick() {
    setCurrentColorNav(true);
  }

  function handleSavedClick() {
    setCurrentColorNav(false);
  }

  function handleMouseEnter(e) {
    e.preventDefault();
    e.target.style.background = '#f0b';
    e.target.style.color = '#292929';
  }

  function handleMouseLeave(e) {
    e.preventDefault();
    e.target.style.background = '#292929';
    e.target.style.color = '#f0b';
  }

  function handleMouseDown(e) {
    e.preventDefault();
    e.target.style.background = '#00fbff';
    e.target.style.color = `#292929`;
  }

  function handleMouseUp(e) {
    e.preventDefault();
    e.target.style.background = '#292929';
    e.target.style.color = `#f09`;
  }

  return (
    <div className={styles.infoPanel}>
      <div className={styles.holdsButtons}>
        {/* CURRENT COLOR BUTTON */}
        <div
          className={`${styles.ccButton} ${styles.buttonStyle}`}
          onMouseEnter={!currentColorNav ? handleMouseEnter : () => {}}
          onMouseLeave={!currentColorNav ? handleMouseLeave : () => {}}
          onMouseDown={!currentColorNav ? handleMouseDown : () => {}}
          onMouseUp={!currentColorNav ? handleMouseUp : () => {}}
          style={currentColorNav ? isActive : isNotActive}
          onClick={handleCurrentClick}
        >
          Current Color
        </div>

        {/* SAVED COLORS BUTTON */}
        {!userObj.id ? (
          <></>
        ) : (
          <div
            className={`${styles.scButton} ${styles.buttonStyle}`}
            onMouseEnter={currentColorNav ? handleMouseEnter : () => {}}
            onMouseLeave={currentColorNav ? handleMouseLeave : () => {}}
            onMouseDown={currentColorNav ? handleMouseDown : () => {}}
            onMouseUp={currentColorNav ? handleMouseUp : () => {}}
            style={currentColorNav ? isNotActive : isActive}
            onClick={handleSavedClick}
          >
            Saved Colors
          </div>
        )}
      </div>
      <div className={styles.infoSection}>
        <div className={styles.info}>
          {currentColorNav ? <CurrentColor /> : <SavedColors />}
        </div>
      </div>
    </div>
  );
}
