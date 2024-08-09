import React, { useState } from 'react'
//Styles
import styles from "./CategoriesPage.module.css"

function CategoriesPage() {
  return (
    <div className={styles.container}>
        <h2>Categories</h2>
        <div className={styles.subContainer}>
            <div className={styles.select}>
                <select>
                    <option>Difficulity</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
                <select>
                    <option>Cooking Time</option>
                    <option>More than 30 min</option>
                    <option>Less than 30 min</option>
                </select>
                <button>Search</button>
            </div>

        </div>
    </div>
  )
}

export default CategoriesPage