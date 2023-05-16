import React from 'react'
import { Button } from '@mui/material'

const Info = () => {

  const addEur = () => {
    localStorage.setItem('2023-05-19_EUR', '4.5465')
    localStorage.setItem('2023-05-20_EUR', '4.5365')
    localStorage.setItem('2023-05-21_EUR', '4.9365')
    localStorage.setItem('2023-05-22_EUR', '4.2365')
  }
  const addUsd = () => {
    localStorage.setItem('2023-05-19_USD', '4.1465')
    localStorage.setItem('2023-05-20_USD', '4.5365')
    localStorage.setItem('2023-05-21_USD', '4.9365')
    localStorage.setItem('2023-05-22_USD', '4.2365')
  }

  return (
    <div className='Info'>
        <h2>On the following days the chart will be populated.</h2>
        <p>Each day, the chart gets + 1 value for every currency from the BNR API.</p>
        <p>The chart is getting the values from the localStorage, this is the reason why at the start it only shows 1 value.</p>
        <p>For demo purposes, (4 random values) here are some add buttons:</p>
        <Button id='infoButton' onClick={() => addEur()} variant='contained' >
          EUR
        </Button>
        <Button id='infoButton' onClick={() => addUsd()} variant='contained' >
          USD
        </Button>
    </div>
  )
}

export default Info