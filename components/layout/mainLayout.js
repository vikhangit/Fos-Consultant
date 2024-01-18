import { useRouter } from "next/router";
import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Phone from "../phone/Phone";
import styles from "./mainLayout.module.scss";

function MainLayout({ children }) {
  const router = useRouter();

  const renderHeader = () => {
    if (router.pathname === "/") {
      return;
    }
    return <Header />;
  };

  const renderFooter = () => {
    if (router.pathname === "/") {
      return;
    }
    return <Footer />;
  };

  return (
    <React.Fragment>
      <div className={styles.mainlayout}>
        {renderHeader()}

        <div className={styles.children}>{children}</div>

        {renderFooter()}

        <Phone />
      </div>
    </React.Fragment>
  );
}

export default MainLayout;
