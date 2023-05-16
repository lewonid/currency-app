import React from 'react'
import { Button } from '@mui/material';
import Loader from '../components/Loader';

const CurrencyList = ({ rates, onCurrencyChange }) => {

  const handleCurrencyChange = (currency) => {
    onCurrencyChange(currency);
  }
  
  if (rates) {
    return (
      <div className='CurrencyList'>
        {
           rates.map(rate => (
            <div key={rate._attributes.currency} className="Currency">
              <Button 
              onClick = {() => handleCurrencyChange(rate._attributes.currency)} 
              style={{margin: '1rem'}} 
              variant="outlined">
                {rate._attributes.currency}
              </Button>
              <span className='rateValue'>{rate._text}</span>
            </div>
          ))
        }
      </div>
    )
  }
  else{
    return(
      <Loader />
    )
  }
}

export default CurrencyList