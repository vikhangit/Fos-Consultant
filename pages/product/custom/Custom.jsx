import Image from "next/image";
import React from "react";
import styles from "./Custom.module.scss";

export default function Custom() {
  return (
    <div className={styles.custom}>
      <div className="d-flex flex-row">
        <div className="col-6 d-none d-lg-block">
          <div className="logo-consultant">
            <Image
              src="/images/consultant.png"
              alt="logo"
              width={641}
              height={300}
            />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <p className="title pt-1 text-center text-lg-start">
            Custom Software Solutions?
            <br />
            Count on us
          </p>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        <div
          className={
            styles.custom_crm + " " + "col-12 col-lg-6 px-3 mt-5 mx-auto"
          }
        >
          <div className={styles.custom_crm_image + " " + "col-9 mx-auto"}>
            <div className="parent">
              <div className="rotate" style={{ "--rotate": 0 }}>
                <div className="child c-0" style={{ "--time": 2 }}>
                  <Image
                    src="/images/SAAS/product.png"
                    alt="crm"
                    width={60}
                    height={60}
                  />

                  <div className="tag-name">
                    <h6>Product</h6>
                    <p>Development</p>
                  </div>
                </div>
              </div>

              <div className="rotate" style={{ "--rotate": 1 }}>
                <div className="child c-1" style={{ "--time": 5 }}>
                  <Image
                    src="/images/SAAS/puzzle.png"
                    alt="crm"
                    width={60}
                    height={60}
                  />

                  <div className="tag-name">
                    <h6>Integration</h6>
                    <p>Solution</p>
                  </div>
                </div>
              </div>

              <div className="rotate" style={{ "--rotate": 2 }}>
                <div className="child c-2" style={{ "--time": 3 }}>
                  <Image
                    src="/images/SAAS/programing.png"
                    alt="crm"
                    width={60}
                    height={60}
                  />

                  <div className="tag-name">
                    <h6>Software</h6>
                    <p>Consulting</p>
                  </div>
                </div>
              </div>

              <div className="rotate" style={{ "--rotate": 3 }}>
                <div className="child c-3" style={{ "--time": 5.5 }}>
                  <div>
                    <Image
                      src="/images/SAAS/monitoring.png"
                      alt="crm"
                      width={60}
                      height={60}
                    />
                  </div>

                  <div className="tag-name">
                    <h6>BI Apps</h6>
                    <p>Development</p>
                  </div>
                </div>
              </div>

              <div className="rotate" style={{ "--rotate": 4 }}>
                <div className="child c-4" style={{ "--time": 2.5 }}>
                  <Image
                    src="/images/SAAS/mobile.png"
                    alt="crm"
                    width={60}
                    height={60}
                  />

                  <div className="tag-name">
                    <h6>Mobile</h6>
                    <p>Apps</p>
                  </div>
                </div>
              </div>

              <div className="rotate" style={{ "--rotate": 5 }}>
                <div className="child c-5" style={{ "--time": 4.5 }}>
                  <Image
                    src="/images/SAAS/database.png"
                    alt="crm"
                    width={60}
                    height={60}
                  />

                  <div className="tag-name">
                    <h6>Database</h6>
                    <p>Development</p>
                  </div>
                </div>
              </div>

              <div className="rotate" style={{ "--rotate": 6 }}>
                <div className="child c-6" style={{ "--time": 3.5 }}>
                  <Image
                    src="/images/SAAS/pc.png"
                    alt="crm"
                    width={60}
                    height={60}
                  />

                  <div className="tag-name">
                    <h6>CRM</h6>
                    <p>Development</p>
                  </div>
                </div>
              </div>

              <div className="rotate" style={{ "--rotate": 7 }}>
                <div className="child c-7" style={{ "--time": 4.5 }}>
                  <Image
                    src="/images/SAAS/cloud.png"
                    alt="crm"
                    width={60}
                    height={60}
                  />

                  <div className="tag-name">
                    <h6>SaaS</h6>
                    <p>Development</p>
                  </div>
                </div>
              </div>

              <div className="center d-flex justify-content-center align-items-center">
                <Image
                  src="/images/SAAS/center.png"
                  alt="crm"
                  width={512}
                  height={512}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 ps-4 ps-lg-0 pe-4 pe-lg-3 z-100">
          <h5 className="title-customer">Development Solutions</h5>
          <p className={styles.custom_content}>
            Custom software development is one of the options that are available
            to businesses and organizations. They offer a cost-effective way of
            helping businesses to get their data from Point-of-Sale to the
            Computer and Network Management systems with little effort and
            minimal investment. With a custom software solution, companies are
            able to provide custom software solutions to meet the exact
            requirements of the organizations
          </p>

          <h5 className="title-customer">Evolving Market Needs</h5>
          <p className={styles.custom_content}>
            The custom software development companies offer customized web
            application development solutions for a wide range of business
            requirements. Such companies develop customized software solutions
            that can support the entire gamut of requirements ranging from lgall
            and medium size businesses to large organizations
          </p>

          <h5 className="title-customer">
            The Benefits of Custom Software Solutions for Businesses
          </h5>
          <p className={styles.custom_content}>
            Software applications are used in every aspect of business life
            including finance, supply chain management and human resources. The
            process of developing software applications is typically very
            complicated, and therefore it is not something that can be
            accomplished by just anyone. Custom software development will help
            you systematically create a customized software solution which
            caters specifically to your company&apos;s unique needs The first is
            the desire to make sure they get only the most cutting-edge
            solutions to their problems, which is possible if they choose
            solutions that were developed by people with industry knowledge,
            experience and skill. There is no question that custom software
            solutions are very valuable to your company. But as with any
            investment, you must do your homework to determine just what your
            needs are and how much time and money you are willing to spend to
            get those solutions.
          </p>
        </div>
      </div>

      <div className={styles.circle}></div>
    </div>
  );
}
