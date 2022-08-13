import React, { FC } from 'react'
import styles from './navbar.module.scss';
import NavbarItem from './NavbarItem';

interface NavbarProps {
  className: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <nav className={[styles.navbar, className].join(" ")}>
      <ul className={styles['navbar-nav']}>
        <NavbarItem value="Home" href="/" className={styles["navbar-item"]} />
        <NavbarItem
          value="Products"
          href="/products"
          className={styles["navbar-item"]}
        />
      </ul>
    </nav>
  );
};

export default Navbar;