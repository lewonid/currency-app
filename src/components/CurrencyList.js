import React from 'react'

import { Button } from '@mui/material';
import Loader from '../components/Loader';

import styles from '../assets/CurrencyList.module.css'

const CurrencyList = ({ rates, onCurrencyChange }) => {

  const handleCurrencyChange = (currency) => {
    onCurrencyChange(currency);
  }

  if (rates) {
    return (
      <div className={styles.CurrencyList}>
        <h3>*select a currency from below to show the reference rate to RON</h3>
        <div className={styles.CurrenciesContainer}>
          {
            rates.map(rate => (
              <div key={rate._attributes.currency} className={styles.Currency}>
                <Button
                  onClick={() => handleCurrencyChange(rate._attributes.currency)}
                  style={{ margin: '1rem' }}
                  variant="outlined">
                  {rate._attributes.currency}
                </Button>
                <span className={styles.rateValue}>{rate._text}</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <Loader />
    )
  }
}

export default CurrencyList