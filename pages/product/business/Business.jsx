import Image from "next/image";
import React from "react";
import styles from "./Business.module.scss";

export default function Business() {
  return (
    <div className={styles.business}>
      <div className="d-flex flex-wrap">
        <div className="col-12 col-lg-5 d-flex flex-column justify-content-between z-100">
          <div className="logo-consultant-2 d-none d-lg-block">
            <Image
              src="/images/consultant.png"
              alt="logo"
              width={641}
              height={300}
            />
          </div>

          <p className="title px-3 d-none d-lg-block">
            Business
            <br />
            Software
            <br />
            Solution
          </p>

          <p className="title px-3 d-block d-lg-none text-center mb-4 mb-lg-0">
            Business Software Solution
          </p>
        </div>

        <div
          className={
            styles.business_image +
            " " +
            "col-12 col-sm-10 col-lg-7 d-flex flex-row mx-auto"
          }
        >
          <div className={styles.business_image_left + " " + "col"}>
            <Image src="/images/3.png" alt="crm" width={600} height={600} />
          </div>
          <div className={styles.business_image_right + " " + "col"}>
            <Image src="/images/5.png" alt="crm" width={600} height={600} />
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        <div className="col-6 col-lg-3 ps-0 ps-sm-5 ps-lg-3 pe-1 pe-sm-0">
          <h5 className="title-business mt-1">Mobile App Development</h5>
          <p className={styles.business_content}>
            We are a leading mobile app development company, offering
            high-quality and reliable app development services at attractive
            costs.
          </p>
        </div>

        <div className="col-6 col-lg-3 ps-2 ps-sm-5 ps-lg-3">
          <h5 className="title-business mt-1">Web App Devlopment</h5>
          <p className={styles.business_content}>
            We offer end-to-end services, including UI/UX design, development,
            performance testing, production deployment, and post-launch support.
          </p>
        </div>

        <div className="col-6 col-lg-3 ps-0 ps-sm-5 ps-lg-3 pe-1 pe-sm-0">
          <h5 className="title-business mt-1">Internal App Development</h5>
          <p className={styles.business_content}>
            Based on the size and resources of your company you need to decide
            how the app will be developed.
          </p>
        </div>

        <div className="col-6 col-lg-3 ps-2 ps-sm-5 ps-lg-3">
          <h5 className="title-business mt-1">Consultant Process Digital</h5>
          <p className={styles.business_content}>
            There are two options - build it internally or outsource pieces or
            even the whole project to an app development shop. To start,
            let&apos;s look at what you need to build it internally.
          </p>
        </div>
      </div>
    </div>
  );
}
