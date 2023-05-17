import React from 'react'

import { Button } from '@mui/material'

import styles from '../assets/CurrencyBlock.module.css'

const CurrencyBlock = ({ currency, value }) => {
    return (
        <div className={styles.CurrencyBlock}>
            <Button id={styles.currencyBlockButton} variant="outlined">{currency}</Button>
            <p>{value}</p>
        </div>
    )
}

export default CurrencyBlock