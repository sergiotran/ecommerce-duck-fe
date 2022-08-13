import React, { ReactNode } from "react";
import Footer from '../../Footer';
import Header from '../../Header';
import styles from "./main-layout.module.scss";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles["main-layout"]}>
    <Header />
    {children}
    <Footer />
  </div>;
};

export default MainLayout;
