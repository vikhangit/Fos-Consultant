import Link from "next/link";
import React from "react";
import styles from "./footerColor.module.scss";

function FooterColor() {
  return (
    <div className={styles.footerColor}>
      {/* <div className="col">
        <Link href="/">
          <Image alt="logo" src={Logo} width={100} height={87} />
        </Link>
      </div> */}

      <div className="d-flex flex-wrap">
        <div className="col-12 col-sm position-relative">
          <h4 className="text-white fostech">Fostech</h4>
        </div>

        <div className="col-4 col-sm d-flex flex-column">
          <h6 className={styles.footerColor_title}>Company</h6>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/product/custom">
              <li>Product</li>
            </Link>
            <Link href="/why-us">
              <li>Why Us</li>
            </Link>
          </ul>
        </div>

        {/* <div className="col d-flex flex-column">
          <h6 className={styles.footerColor_title}>Social</h6>
          <ul>
            <li>Facebook</li>
            <li>Linkedin</li>
          </ul>
        </div> */}

        <div className="col-4 col-sm d-flex flex-column">
          <Link href="/about">
            <h6 className={styles.footerColor_title}>About</h6>
          </Link>
        </div>

        <div className="col-4 col-sm d-flex flex-column">
          <Link href="/contact">
            <h6 className={styles.footerColor_title}>Contact</h6>
          </Link>
        </div>
      </div>

      <hr />

      <div className="text-center">
        <p>© Copyright FOSTECH . All rights reserved</p>
      </div>
    </div>
  );
}

export default FooterColor;
