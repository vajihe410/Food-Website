import React from 'react'
import Link from 'next/link'
//Styles
import styles from "./Banner.module.css"

function Banner() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h2>Food</h2>
            <p>Food Delivery and Takeout</p>
            <span>Food is an online food ordering and delivery paltform launched by Uber in 2014. Meals are delivered by couriers using cars, scooters, bikes or on foot. </span>
            <Link href="/menu">See All</Link>
        </div>
        <div className={styles.right}>
            <img src='/images/banner.png' alt='food image'/>
        </div>
    </div>
  )
}

export default Banner