import React from 'react'
//Styles
import styles from "./HomePage.module.css"
//Components
import Banner from '../modules/Banner'
import Attributes from '../modules/Attributes'

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner/>
      <Attributes/>
    </div>
  )
}

export default HomePage