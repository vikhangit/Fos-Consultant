import Image from "next/image";
import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <div className="logo-consultant">
        <Image
          src="/images/consultant.png"
          alt="logo"
          width={641}
          height={300}
        />
      </div>

      <div className={styles.about_image + " " + "col-6"}>
        <Image src="/images/about.png" alt="about" width={1440} height={1440} />
      </div>

      <div className={styles.about_title + " " + "d-block d-sm-none"}>
        <p className="title">About Company</p>
      </div>

      <div className={styles.about_decor}>
        <div
          className={
            styles.about_decor_text + " " + "col-11 col-sm-11 col-lg-8"
          }
        >
          <p className={styles.text_title + " " + "d-none d-sm-block"}>
            About Company
          </p>

          <p className={styles.text_slogan}>
            Product Delivery with Simple and Conformity Solution
          </p>

          <ul className={styles.text_content}>
            <li>
              Understand the various information system and conclude as to their
              effectiveness.
            </li>
            <li>Understand the support structure for the IT systems.</li>
            <li>Determine any future and software requirements.</li>
            <li>
              Understand the company&apos;s disaster recovery plan and
              procedures.
            </li>
            <li>
              Determine whether the company&apos;s IT systems interface can
              interface with those of the buyer.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
