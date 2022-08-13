import React from 'react'
import Logo from '../Logo'
import Navbar from '../Navbar'
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo title='Ecommerce NextJS' />
      <Navbar className={styles['header-navbar']} />
    </header>
  )
}

export default Header