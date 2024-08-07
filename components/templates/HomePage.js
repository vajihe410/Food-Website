import React from 'react'
//Styles
import styles from "./HomePage.module.css"
//Components
import Banner from '../modules/Banner'

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner/>
    </div>
  )
}

export default HomePage