import React from 'react'
//Styles
import styles from "./HomePage.module.css"
//Components
import Banner from '../modules/Banner'
import Attributes from '../modules/Attributes'
import Definition from '../modules/Definition'
import Companies from '../modules/Companies'

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner/>
      <Attributes/>
      <Definition/>
      <Companies/>
    </div>
  )
}

export default HomePage