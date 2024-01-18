import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { listCustomer } from "../../utils/Data/Customer";
import styles from "./Customer.module.scss";

function Customer() {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    dots: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.customer}>
      <div className={styles.customer_slide}>
        <p className="title text-center mb-0">Our Customers</p>

        <Slider {...settings}>
          {listCustomer.map((item, index) => (
            <div key={index} className="text-center">
              <Image src={item.img} width={200} height={200} alt="logo" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Customer;
