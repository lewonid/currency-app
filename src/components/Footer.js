import React from 'react'

import { IoLogoReact } from 'react-icons/io5'

import style from '../assets/Footer.module.css'

const Footer = () => {
    return (
        <div className={style.Footer}>
            <p>powered with </p>
            <div className={style.Container}>
                <p><IoLogoReact /></p>
                <p>BNR API</p>
                <p>Chart.js</p>
                <p>Firebase</p>
            </div>
        </div >
    )
}

export default Footer