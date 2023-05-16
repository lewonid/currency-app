import { useEffect, useState } from 'react';

import CurrencyChart from './components/CurrencyChart';
import Info from './components/Info';

import convertDataToXml from './utils/convertDataToXml';

import './App.css';
import Header from './components/Header';


function App() {

  const [rates, setRates] = useState();
  // const [publishingDate, setPublishingDate] = useState();

  useEffect(() => {
    const saveDataToLocalStorage = () => {
      // Fetch API data
      fetch('https://www.bnr.ro/nbrfxrates.xml')
        .then((response) => response.text())
        .then((data) => {
          // Convert data to XML format
          const jsonData = convertDataToXml(data);

          const rates = jsonData.DataSet.Body.Cube.Rate;
          setRates(rates);

          const publishingDate = jsonData.DataSet.Header.PublishingDate._text;
          // setPublishingDate(publishingDate);

          rates.forEach(rate => {
            if(rate._attributes.multiplier){ // if multiplier exists from API
              localStorage.setItem(publishingDate + "_" + rate._attributes.currency, rate._text * 100);

            }else{
              localStorage.setItem(publishingDate + "_" + rate._attributes.currency, rate._text);
            }
          });
  
        })
        .catch((error) => {
          console.error('Error fetching API data:', error);
        });
    };
    saveDataToLocalStorage();
  }, [])

  return (
    <div className="App">
      <Header />
      <CurrencyChart rates={rates} />
      {/* <CurrencyChart /> */}
      <Info />
    </div>
  );
}

export default App;

