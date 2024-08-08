import React from 'react'
import Link from 'next/link'
//Styles
import styles from "./Card.module.css"
//Icons
import Dollar from "../icons/Dollar"
import Location from "../icons/Location"

function Card(props) {
    const { id, name, price, discount, details } = props
  return (
    <div className={styles.container}>
        <img src={`/images/${id}.jpeg`} alt={name}/>
        <div className={styles.details}>
            <h4>{name}</h4>
            <div>
                <Location/>
                {details[0].Cuisine}
            </div>
        </div>
        <div className={styles.price}>
                <Dollar/>
                {discount ? (
                    <span className={styles.discount}>{(price * (100 - discount))/100}$</span>
                ): <span>{price}$</span>}
        </div>
        {discount ? <div className={styles.badge}>{discount}%</div>:null}
        <Link href={`/menu/${id}`}>See Details</Link>
    </div>
  )
}

export default Card