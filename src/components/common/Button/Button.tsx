import React from 'react'
import styles from './Button.module.css'

export default function Button({title}) {
  return (
    <button className={`${styles.btn} ${styles.btn_primary}`}>{title}</button>
  );
}
