"use client"

import React, { useContext } from "react";
import styles from "./themeBtn.module.css";
import { ThemeContext } from '../../../context/themeContext/ThemeContext'

const ThemeBtn = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "0.2rem" } : { right: "0.2rem" }}
      />
    </div>
  );
};

export default ThemeBtn;