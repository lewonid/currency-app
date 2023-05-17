import React, { useState } from 'react'

import { firestore } from "../utils/firebase"
import { collection, getDocs } from "@firebase/firestore"

import { Button } from '@mui/material';

import style from '../assets/DataFromFirebase.module.css'
import CurrencyBlock from './CurrencyBlock';

const DataFromFirebase = () => {

    const [queryData, setQueryData] = useState(); // from fireBase request

    const fetchCollectionData = async () => {
        const collectionRef = collection(firestore, "currencies_data");

        try {
            const querySnapshot = await getDocs(collectionRef);
            const newData = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                // push each query 
                newData.push(data);
            });
            setQueryData(newData);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={style.DataFromFirebase}>
            <h2>The data is stored in Firestore.</h2>
            <p>All the data about currencies, dates and values are also stored in <span style={{ color: '#2e7d32' }}>Firestore</span>.</p>
            <p>With the following button you can fetch and render all the data from the firestore database.</p>
            <Button
                onClick={() => fetchCollectionData()}
                id={style.fetchButton}
                variant="contained"
                color="success">
                fetch & render data
            </Button>
            <div className={style.ContainerCurrencyBlock}>
                {
                    queryData
                        ? Object.values(queryData.reduce((groupedData, query) => {
                            const date = query.publishDate;
                            if (!groupedData[date]) {
                                groupedData[date] = [];
                            }
                            groupedData[date].push(query);
                            return groupedData;
                        }, {})).map((group, index) => ( // grouping by Date
                            <div key={index}>
                                <h3>{group[0].publishDate}</h3>
                                <div className={style.ContainerByDate}>
                                    {group.map(query => (
                                        <CurrencyBlock
                                            key={query.value}
                                            currency={query.currency}
                                            value={query.value}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default DataFromFirebase