import React from 'react'
//Styles
import styles from './Companies.module.css'
//Icons
import Apple from '../icons/Apple'
import Tesla from '../icons/Tesla'
import SpaceX from '../icons/SpaceX'
import Biance from '../icons/Binance'

function Companies() {
  return (
    <div className={styles.container}>
        <Apple/>
        <SpaceX/>
        <Biance/>
        <Tesla/>
    </div>
  )
}

export default Companies