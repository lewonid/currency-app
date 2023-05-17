import React from 'react'

import styles from '../assets/Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <h2><span style={{ color: '#063e7e' }}>Currency</span> <span style={{ color: '#2e7d32' }}>Chart App</span></h2>
    </div>
  )
}

export default Header