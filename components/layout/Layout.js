import React from 'react'
import Link from 'next/link'
//Styles
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/"> Food </Link>
            </div>
            <div className={styles.right}>
                <Link href="/menu">Menu</Link>
                <Link href="/categories">Categories</Link>
            </div>
        </header>
        <div className={styles.container}>
            {children}
        </div>
        <footer className={styles.footer}>
            <p>Food website project &copy;</p>
        </footer>
    </>
  )
}

export default Layout