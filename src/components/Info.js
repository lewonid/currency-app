import React, { useState } from 'react'
import { Button, Alert } from '@mui/material'

import styles from '../assets/Info.module.css'

const Info = () => {

  const [addedItems, setAddedItems] = useState();

  const addEur = () => {
    localStorage.setItem('2023-05-19_EUR', '4.5465')
    localStorage.setItem('2023-05-20_EUR', '4.5365')
    localStorage.setItem('2023-05-21_EUR', '4.9365')
    localStorage.setItem('2023-05-22_EUR', '4.2365')
    localStorage.setItem('2023-05-23_EUR', '4.5465')
    localStorage.setItem('2023-05-24_EUR', '4.5365')
    setAddedItems('EUR');
  }
  const addUsd = () => {
    localStorage.setItem('2023-05-19_USD', '4.1465')
    localStorage.setItem('2023-05-20_USD', '4.5365')
    localStorage.setItem('2023-05-21_USD', '4.9365')
    localStorage.setItem('2023-05-22_USD', '4.2365')
    localStorage.setItem('2023-05-23_USD', '4.9365')
    localStorage.setItem('2023-05-24_USD', '4.2365')
    setAddedItems('USD');
  }
  const addHuf = () => {
    localStorage.setItem('2023-05-19_HUF', '128')
    localStorage.setItem('2023-05-20_HUF', '140')
    localStorage.setItem('2023-05-21_HUF', '146')
    localStorage.setItem('2023-05-22_HUF', '130')
    localStorage.setItem('2023-05-23_HUF', '128')
    localStorage.setItem('2023-05-24_HUF', '140')
    setAddedItems('HUF');
  }

  return (
    <div className={styles.Info}>
      <h2>On the following days the chart will be populated.</h2>
      <p>Longer history from opening the app = bigger charts (more values).</p>
      <p>Each day, the chart gets + 1 value for every currency from the BNR API.</p>
      <p>The chart is getting the values from the localStorage, this is the reason why at the start it only shows 1 value.</p>
      <p>For demo purposes, here are a few buttons to add some values in the chart:</p>
      <Button id={styles.infoButton} onClick={() => addEur()} variant='contained' >
        EUR
      </Button>
      <Button id={styles.infoButton} onClick={() => addUsd()} variant='contained' >
        USD
      </Button>
      <Button id={styles.infoButton} onClick={() => addHuf()} variant='contained' >
        HUF
      </Button>
      {
        addedItems ? <Alert id={styles.infoAlert} severity="success">4 random values of {addedItems} were added to localStorage succesfully!</Alert>
          : null
      }
      <p>* press a button then refresh the page</p>
    </div>
  )
}

export default Info