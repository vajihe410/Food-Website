import React from 'react'
//Styles
import styles from './MenuPage.module.css'
//Components
import Card from '../modules/Card'

function MenuPage({data}) {
  return (
    <div className={styles.container}>
        <h2>Menu</h2>
        <div className={styles.subContainer}>
            {data.map((food) => <Card key={food.id} {...food}/>)}
        </div>
    </div>
  )
}

export default MenuPage

