import { useEffect, useState } from 'react'

import Header from './components/Header';
import CurrencyChart from './components/CurrencyChart';
import Info from './components/Info';
import DataFromFirebase from './components/DataFromFirebase';
import Footer from './components/Footer';

import convertDataToXml from './utils/convertDataToXml';
import handleAddDataFirebase from './utils/handleAddDataFirebase';

import './App.css';

function App() {

  const [rates, setRates] = useState();
  // const [publishingDate, setPublishingDate] = useState();

  useEffect(() => {
    const saveDataToLocalStorage = () => {
      // fetch API data

      const proxyUrl = 'https://api.allorigins.win/raw?url='; // using this method due to CORS problem
      const apiUrl = 'https://www.bnr.ro/nbrfxrates.xml';

      fetch(proxyUrl + apiUrl)
        .then((response) => response.text())
        .then((data) => {
          // convert XML to JSON format
          const jsonData = convertDataToXml(data);

          const rates = jsonData.DataSet.Body.Cube.Rate;
          setRates(rates);

          const publishingDate = jsonData.DataSet.Header.PublishingDate._text;
          // setPublishingDate(publishingDate);

          rates.forEach(rate => {
            if (rate._attributes.multiplier) { // if multiplier exists from API
              // date               currency                    value
              // saving in the localStorage
              localStorage.setItem(publishingDate + "_" + rate._attributes.currency, rate._text * 100);
              // saving in firestore
              handleAddDataFirebase(rate._attributes.currency, publishingDate, rate._text * 100);
              // set firebase db here
            } else {
              // saving in the localStorage
              localStorage.setItem(publishingDate + "_" + rate._attributes.currency, rate._text);
              // saving in firestore
              handleAddDataFirebase(rate._attributes.currency, publishingDate, rate._text);
              // set firebase db here 
            }
            // console.log(publishingDate + "_" + rate._attributes.currency, rate._text)
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
      <div className='InfoContainer'>
        <Info />
        <DataFromFirebase />
      </div>
      <Footer />
    </div>
  );
}

export default App;

