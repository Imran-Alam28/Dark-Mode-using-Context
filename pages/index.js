import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/darkMode';
import styles from '../styles/color.module.css';


function Component() {
  const { mode, toggleMode } = useContext(DarkModeContext);

  return (
    <div className={mode==='light'?styles.light:styles.dark}>
      <button onClick={toggleMode}>{mode} Mode</button>
    </div>
  );
}

export default Component;