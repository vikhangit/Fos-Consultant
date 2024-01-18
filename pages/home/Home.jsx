import gsap from "gsap";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import SplitType from "split-type";
import Customer from "../../components/customer/Customer";
import FooterColor from "../../components/footer/footerColor";
import Header from "../../components/header/header";
import Phone from "../../components/phone/Phone";
import About from "../about/About";
import Contact from "../contact/Contact";
import Business from "../product/business/Business";
import Custom from "../product/custom/Custom";
import Digital from "../product/digital/Digital";
import WhyUs from "../why-us/WhyUs";
import styles from "./Home.module.scss";

function HomePage() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const router = useRouter();

  useEffect(() => {
    const text1 = new SplitType("#target-1"); //Request
    const text2 = new SplitType("#target-2"); //Custom
    const text3 = new SplitType("#target-3"); //Business
    const text4 = new SplitType("#target-4"); //Digital
    const text5 = new SplitType("#target-5"); //WhyUs
    const text6 = new SplitType("#target-6"); //About
    const text7 = new SplitType("#target-7"); //Contact
    const text8 = new SplitType("#target-8"); //Make

    gsap.fromTo(
      "#target-1 .char",
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 45,
        opacity: 0,
      },
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#target-2 .char",
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 45,
        opacity: 0,
      },
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#target-3 .char",
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 45,
        opacity: 0,
      },
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#target-4 .char",
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 45,
        opacity: 0,
      },
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#target-5 .char",
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 45,
        opacity: 0,
      },
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#target-6 .char",
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 45,
        opacity: 0,
      },
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#target-7 .char",
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 45,
        opacity: 0,
      },
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#target-8 .char",
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 45,
        opacity: 0,
        repeat: 100000,
        repeatDelay: 2,
      },
      {
        stagger: 0.05,
        delay: 0.05,
        duration: 0.1,
        y: 0,
        opacity: 1,
        repeat: 100000,
        repeatDelay: 2,
      }
    );
  }, []);

  return (
    <>
      <div className={styles.home + " " + "box-section"}>
        <section className="d-flex flex-wrap px-2 px-lg-5 section">
          <Header />
          <div className="col-12 col-sm-3 p-2">
            <div className="d-flex flex-column justify-content-end h-100">
              <div
                className="btnGoToTop"
                onClick={scrollToTop}
                style={{ display: visible ? "" : "none" }}
              >
                <BiUpArrowAlt />
              </div>

              <div
                className={
                  styles.home_box_1 +
                  " " +
                  "d-flex flex-row flex-sm-column justify-content-end"
                }
              >
                <div
                  className={
                    styles.slogan +
                    " " +
                    "col-6 col-sm-12 d-flex flex-column-reverse flex-lg-row justify-content-sm-between"
                  }
                >
                  <div>
                    <p id="target-8" className="mb-0">
                      Make
                      <br />
                      automation
                      <br />
                      work for you
                    </p>
                  </div>

                  <div className="d-flex flex-row justify-content-lg-center align-items-center px-0 px-lg-1 pb-2 pb-lg-0">
                    <button
                      title="About Us"
                      className="btn-plus"
                      onClick={() => {
                        router.push("/about");
                      }}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </button>
                  </div>
                </div>

                <div className="col-6 col-sm-12 ps-2 ps-sm-0">
                  <div
                    className={
                      styles.content +
                      " " +
                      " d-flex flex-column justify-content-between"
                    }
                  >
                    <h1 id="target-1">Request a Consultation</h1>

                    <div
                      className={styles.arrow}
                      onClick={() => {
                        router.push("/contact");
                      }}
                      title="Contact Us"
                    >
                      <i className="far fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-9 d-flex flex-wrap">
            <div className="col-6 col-sm-4 p-2">
              <div className={[styles.home_box, styles.home_box_2].join(" ")}>
                <h1
                  id="target-2"
                  className={styles.home_box_heading}
                  onClick={() => {
                    router.push("/product/custom");
                  }}
                >
                  Custom
                  <br />
                  Software
                  <br />
                  Solutions?
                </h1>

                <button
                  title=" Custom Software Solutions?"
                  className="btn-plus-box"
                  onClick={() => {
                    router.push("/product/custom");
                  }}
                >
                  <i className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>

            <div className="col-6 col-sm-4 p-2">
              <div className={[styles.home_box, styles.home_box_3].join(" ")}>
                <h1
                  id="target-3"
                  className={styles.home_box_heading}
                  onClick={() => {
                    router.push("/product/business");
                  }}
                >
                  Business
                  <br />
                  Software
                  <br />
                  Solution
                </h1>

                <button
                  title="Business Software Solution"
                  className="btn-plus-box"
                  onClick={() => {
                    router.push("/product/business");
                  }}
                >
                  <i className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>

            <div className="col-6 col-sm-4 p-2">
              <div className={[styles.home_box, styles.home_box_4].join(" ")}>
                <h1
                  id="target-4"
                  className={styles.home_box_heading}
                  onClick={() => {
                    router.push("/product/digital");
                  }}
                >
                  Digital
                  <br />
                  Consulting
                  <br />
                  Services
                </h1>

                <button
                  title="Digital Consulting Services"
                  className="btn-plus-box"
                  onClick={() => {
                    router.push("/product/digital");
                  }}
                >
                  <i className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>

            <div className="col-6 col-sm-4 p-2">
              <div className={[styles.home_box, styles.home_box_5].join(" ")}>
                <h1
                  id="target-5"
                  className={styles.home_box_heading}
                  onClick={() => {
                    router.push("/why-us");
                  }}
                >
                  Why Us
                </h1>

                <button
                  title="Why Us"
                  className="btn-plus-box"
                  onClick={() => {
                    router.push("/why-us");
                  }}
                >
                  <i className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>

            <div className="col-6 col-sm-4 p-2">
              <div className={[styles.home_box, styles.home_box_6].join(" ")}>
                <h1
                  id="target-6"
                  className={styles.home_box_heading}
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  About Us
                </h1>

                <button
                  title="About Us"
                  className="btn-plus-box"
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  <i className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>

            <div className="col-6 col-sm-4 p-2">
              <div className={[styles.home_box, styles.home_box_7].join(" ")}>
                <h1
                  id="target-7"
                  className={styles.home_box_heading}
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  Contact Us
                </h1>

                <button
                  title="Contact Us"
                  className="btn-plus-box"
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  <i className="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.home_child}>
          <section className="section mt-home">
            <Custom />
          </section>

          <section className="section mt-home">
            <Business />
          </section>

          <section className="section mt-home">
            <Digital />
          </section>

          <section className="section mt-home">
            <WhyUs />
          </section>

          <section className="section mt-home">
            <About />
          </section>

          <section className="section mt-home">
            <Contact />
          </section>

          <section className="section mt-home d-flex flex-column justify-content-between">
            <Customer />
            <FooterColor />
          </section>

          <Phone />
        </div>
      </div>
    </>
  );
}

export default HomePage;
