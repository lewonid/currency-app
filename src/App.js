import { useEffect, useState } from 'react';

import CurrencyChart from './components/CurrencyChart';

import convertDataToXml from './utils/convertDataToXml';

import './App.css';


function App() {

  // const [rates, setRates] = useState();
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
          // setRates(rates);

          const publishingDate = jsonData.DataSet.Header.PublishingDate._text;
          // setPublishingDate(publishingDate);

          rates.forEach(rate => {
            // console.log(rate._attributes.currency + " " + rate._text);
            localStorage.setItem(publishingDate + "_" + rate._attributes.currency, rate._text);
          });
  
        })
        .catch((error) => {
          console.error('Error fetching API data:', error);
        });
    };
    saveDataToLocalStorage();
  }, [])

  localStorage.setItem('2023-05-17_EUR', '7.9365')
  localStorage.setItem('2023-05-18_EUR', '4.9365')


  return (
    <div className="App">
      {/* <CurrencyChart rates={rates} publishingDate={publishingDate} /> */}
      <CurrencyChart />
    </div>
  );
}

export default App;

