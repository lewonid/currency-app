import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2'

import styles from '../assets/CurrencyChart.module.css';
import comparator from '../utils/comparator'
import CurrencyList from './CurrencyList';
import Loader from './Loader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CurrencyChart = ({ rates }) => {

  const [currency, setCurrencyRegExp] = useState(/_EUR$/);
  const [currencyString, setCurrencyString] = useState('EUR');

  // options for Chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Reference rates: 1 ${currencyString} to RON`,
      },
    },
  };

  // get the currency selected in the currency list from CurrencyList component with a callback function
  const handleCurrencyChange = (currency) => {
    setCurrencyRegExp(new RegExp("_" + currency + "$"));
    setCurrencyString(currency);
  };

  // get currency data from localStorage by key and value
  const currencyData = Object.keys(localStorage).filter(function (key) {
    return currency.test(key);
  }).map(function (key) {
    return [key, localStorage.getItem(key)];
  });


  // sort the data array using the comparator function
  const sortedCurrencyData = currencyData.sort(comparator);

  // defining two empty objects
  const labels = [];
  const values = [];

  // push data into labels and values, the two objects are going to be used as parameter in Chart component
  Object.values(sortedCurrencyData).forEach((currency) => {
    const [date] = currency[0].split('_');
    const [value] = currency[1].split('_');
    labels.push(date);
    values.push(parseFloat(value));
  });

  // defining the chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: `${currencyString} Value`,
        data: values,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  // render chart if data is loaded
  if (chartData) {
    return (
      <div className={styles.CurrencyChart}>
        <Line options={options} data={chartData} />
        <CurrencyList rates={rates} onCurrencyChange={handleCurrencyChange} />
      </div>
    )
  }
  else {
    return (
      <Loader />
    )
  }

}

export default CurrencyChart