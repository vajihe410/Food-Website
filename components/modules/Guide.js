import React from 'react'
import Link from 'next/link'
//Styles
import styles from './Guide.module.css'

function Guide() {
  return (
    <div className={styles.container}>
        <Link href='/menu'>Menu</Link>
        <Link href='/categories'>Categories</Link>
        <Link href='/'>Discount</Link>
    </div>
  )
}

export default Guide