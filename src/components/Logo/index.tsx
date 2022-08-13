import React, { FC } from "react";
import styles from "./logo.module.scss";

interface LogoProps {
  title: string;
}

const Logo: FC<LogoProps> = (props) => {
  const { title } = props;
  return <div className={styles.logo}>
    <h1 className={styles['logo-title']}>{title}</h1>
  </div>;
};

export default Logo;
