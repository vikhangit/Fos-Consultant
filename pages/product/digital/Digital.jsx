import Image from "next/image";
import React from "react";
import styles from "./Digital.module.scss";

export default function Digital() {
  return (
    <div className={styles.digital}>
      <div className="logo-consultant d-none d-sm-block">
        <Image
          src="/images/consultant.png"
          alt="logo"
          width={641}
          height={300}
        />
      </div>

      <div className="d-flex flex-column-reverse flex-sm-row mt-4">
        <div
          className={
            styles.digital_wrap +
            " " +
            "col-12 d-flex flex-wrap justify-content-end px-3"
          }
        >
          <div className={styles.wrap_box + " " + "col-11 col-sm col-lg-3 mx-auto mx-sm-0 mt-2 mt-sm-0"}>
            <p className={styles.wrap_box_title}>Digital Audit</p>
            <p className={styles.wrap_box_content}>
              How a website&apos;s performance is evaluated across a diverse
              array of categories. Digital audits give us a better understanding
              of the pain points and areas of growth for our client&apos;s web
              and mobile experience.
            </p>
          </div>

          <div className={styles.wrap_box + " " + "col-11 col-sm col-lg-3 mx-auto mx-sm-0"}>
            <p className={styles.wrap_box_title}>Digital Strategy</p>
            <p className={styles.wrap_box_content}>
              Digital strategy is the application of digital technologies to
              business models to form new differentiating business capabilities.
              In the future, all business strategy will be digital strategy.
            </p>
          </div>

          <div className={styles.wrap_box + " " + "col-11 col-sm col-lg-3 mx-auto mx-sm-0"}>
            <p className={styles.wrap_box_title}>Design and Implementation</p>
            <p className={styles.wrap_box_content}>
              Design and implementation is the fourth phase of the project
              cycle, subsequent to value chain selection, value chain analysis
              and designing the competitiveness strategy.
            </p>
          </div>
        </div>

        <div className={styles.digital_image + " " + "col-12 col-sm-6"}>
          <Image src="/images/5.png" alt="crm" width={600} height={600} />
        </div>

        <div className="col-12 col-sm-6">
          <p className="title d-none d-sm-block  ps-0 ps-sm-5 ps-lg-0">
            Digital Consulting
            <br />
            Services
          </p>

          <p className="title text-center d-block d-sm-none">
            Digital Consulting Services
          </p>
        </div>
      </div>
    </div>
  );
}
