import React from 'react'
//Styles
import styles from "./Attributes.module.css"
//Icons
import Food from '../icons/Food'
import Fast from '../icons/Fast'
import Clock from '../icons/Clock'
import Choice from '../icons/Choice'
function Attributes() {
  return (
    <div className={styles.container}>
        <h3>Why us?</h3>
        <div className={styles.subContainer}>
            <div>
                <Fast/>
                <p>Fast</p>
            </div>
            <div>
                <Food/>
                <p>Best Resturants</p>
            </div>
            <div>
                <Choice/>
                <p>Your Choice</p>
            </div>
            <div>
                <Clock/>
                <p>24-7</p>
            </div>
        </div>
    </div>
  )
}

export default Attributes