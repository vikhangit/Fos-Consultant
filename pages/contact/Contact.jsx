import emailjs from "@emailjs/browser";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "./Contact.module.scss";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    console.log(process.env.EMAIL_JS_SERVICE);
    emailjs
      .send(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        data,
        process.env.EMAIL_JS_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = (data) => {
    sendEmail(data);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Message sent successfully.",
      text: "Please check your email.",
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(() => {
      reset();
    }, "2000");
  };

  return (
    <div className={styles.contact + " " + "d-flex flex-wrap"}>
      <div className="col-11 col-sm-6 d-flex flex-column position-relative mx-auto mx-sm-0">
        {/* <div className="logo-consultant d-none d-sm-block" style={{ left: -40 }}>
          <Image
            src="/images/consultant.png"
            alt="logo"
            width={641}
            height={300}
          />
        </div> */}

        <div
          className={
            styles.contact_left + " " + "col col-sm-9 col-lg-7 col-xxl-6 z-100"
          }
        >
          <p className="title text-center text-sm-start">Contact Us</p>

          <div className={styles.contact_box}>
            <div className="d-flex flex-row align-items-center my-2">
              <i
                className="fas fa-phone-volume"
                style={{ transform: "translateX(4px) rotate(-45deg)" }}
              ></i>
              <a href="tel:02866866067">+84 028 668 660 67</a>
            </div>

            <div className="d-flex flex-row align-items-center my-2">
              <i className="fas fa-envelope"></i>
              <a
                href="mailto:info@fostech.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@fostech.vn
              </a>
            </div>

            <div className="d-flex flex-row align-items-center my-2">
              <i className="fas fa-globe"></i>
              <a
                href="https://fostech.vn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fostech.vn
              </a>
            </div>

            <div className="d-flex flex-row align-items-center my-2">
              <i className="fas fa-map-marker-alt"></i>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://goeco.link/UuAKt"
              >
                No.1-3 D4 Street, Him Lam Kenh Te Residential Area, Tan Hung
                Ward, District 7, Ho Chi Minh City
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contact_boxImage + " " + "col-12 col-sm-6 "}>
        <div
          className={
            styles.contact_boxImage_image + " " + "col-12 col-sm-11 col-lg-6"
          }
        >
          <p className={styles.contact_boxImage_title}>
            Get in touch with us. We&apos;re ready to help you find the best
            solutions.
          </p>

          <div className={styles.contact_form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-column mb-3">
                <span>Your name*</span>
                <input
                  className=""
                  type="text"
                  placeholder="Full name"
                  {...register("fullName", { required: true })}
                  style={{
                    border: errors.fullName && "2px solid red",
                    outline: errors.fullName && "none",
                  }}
                />
                {/* {errors.fullName && (
                  <span className="error">This field is required</span>
                )} */}
              </div>
              {console.log(errors.fullName)}

              <div className="d-flex flex-column mb-3">
                <span>Your phone*</span>
                <input
                  type="text"
                  placeholder="0123456789"
                  {...register("phone", { required: true })}
                  style={{
                    border: errors.phone && "2px solid red",
                    outline: errors.phone && "none",
                  }}
                />
                {/* {errors.phone && (
                  <span className="error">This field is required</span>
                )} */}
              </div>

              <div className="d-flex flex-column mb-3">
                <span>Your email*</span>
                <input
                  type="email"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                  style={{
                    border: errors.email && "2px solid red",
                    outline: errors.email && "none",
                  }}
                />
                {/* {errors.email && (
                  <span className="error">This field is required</span>
                )} */}
              </div>

              <div className="d-flex flex-column mb-3">
                <span>Subject*</span>
                <input
                  type="text"
                  placeholder="Tell me more about you"
                  {...register("subject", { required: true })}
                  style={{
                    border: errors.subject && "2px solid red",
                    outline: errors.subject && "none",
                  }}
                />
                {/* {errors.subject && (
                  <span className="error">This field is required</span>
                )} */}
              </div>

              <div className="d-flex flex-column mb-3">
                <span>Message*</span>
                <input
                  type="text"
                  placeholder="Write your message here"
                  {...register("message", { required: true })}
                  style={{
                    border: errors.message && "2px solid red",
                    outline: errors.message && "none",
                  }}
                />
                {/* {errors.message && (
                  <span className="error">This field is required</span>
                )} */}
              </div>

              <div className="pt-3">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
