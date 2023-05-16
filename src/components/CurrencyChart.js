import React from 'react'
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend } from 'chart.js';
  
import { Line } from 'react-chartjs-2'

import styles from '../assets/CurrencyChart.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const CurrencyChart = () => {
// const CurrencyChart = ({ rates, publishingDate }) => {

    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Reference rates RON',
          },
        },
      };
           

    // const data = {
    //     labels: ['14-05-2023', '15-05-2023', '16-05-2023'],
    //     datasets: [
    //       {
    //         label: 'USD',
    //         borderColor: 'rgba(255, 99, 132, 1)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //         data: [1.21, 1.22, 1.25],
    //       },
    //       {
    //         label: 'EUR',
    //         borderColor: 'rgba(54, 162, 235, 1)',
    //         backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //         data: [0.89, 0.88, 0.87],
    //       },
    //       {
    //         label: 'GBP',
    //         borderColor: 'rgba(255, 206, 86, 1)',
    //         backgroundColor: 'rgba(255, 206, 86, 0.2)',
    //         data: [0.76, 0.77, 0.78],
    //       },
    //       // Add more currency data here
    //     ],
    //   };

    const euroData = Object.keys(localStorage).filter(function(key) {
        return /_EUR$/.test(key);
      }).map(function(key) {
        return [key, localStorage.getItem(key)];
      });

      console.log(euroData);

      const labels = [];
      const values = [];

      Object.values(euroData).forEach((currency) => {
        const [date, value] = currency[0].split('_');
        labels.push(date);
        values.push(parseFloat(value));
      });

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Currency Value',
            data: values,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    
    

  return (
    <div className={styles.CurrencyChart}>
        <Line options={options} data={chartData} />
    </div>
  )
}

export default CurrencyChart