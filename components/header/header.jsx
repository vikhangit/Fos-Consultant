import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../public/images/LOGOFOSTECH-01.png";
import styles from "./header.module.scss";
// Test

const TAG = [
  {
    id: 1,
    url: "/",
    tag: "/",
    name: "Home",
    dropdown: false,
    tabSub: [],
  },
  {
    id: 2,
    url: "/product",
    tag: "product",
    name: "Product",
    dropdown: true,
    tabSub: [
      {
        id: 1,
        url: "/product/custom",
        tag: "productcustom",
        name: "Custom Software Solutions",
      },
      {
        id: 2,
        url: "/product/business",
        tag: "productbusiness",
        name: "Business Software Solution",
      },
      {
        id: 3,
        url: "/product/digital",
        tag: "productdigital",
        name: "Digital Consulting Services",
      },
    ],
  },
  {
    id: 3,
    url: "/why-us",
    tag: "why-us",
    name: "Why Us",
    dropdown: false,
    tabSub: [],
  },
  {
    id: 4,
    url: "/about",
    tag: "about",
    name: "About",
    dropdown: false,
    tabSub: [],
  },
  {
    id: 5,
    url: "/contact",
    tag: "contact",
    name: "Contact",
    dropdown: false,
    tabSub: [],
  },
];

function Header() {
  const router = useRouter();
  const asPath = router.pathname;
  const [isAsPath, setIsAsPath] = useState("/");

  useEffect(() => {
    if (asPath === "/") {
      setIsAsPath("/");
    } else {
      setIsAsPath(asPath.replace(/[^\w\s]/gi, ""));
    }
  }, [asPath]);

  const checkActive = (link) => {
    if (link.length === 1) {
      return link || "";
    } else {
      return link.replace(/[^\w\s]/gi, "");
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={asPath === "/" ? styles.navbar1 : styles.navbar2}
    >
      <div
        className={
          styles.header + "  " + "justify-content-between mx-auto text-left row"
        }
      >
        <div className={styles.logo + " " + "col-2 p-0 pt-1 ms-3 ms-sm-0"}>
          <Image
            alt="logo"
            src={Logo}
            width={100}
            height={70}
            onClick={() => {
              router.push("/");
            }}
          />
          {/* <Image
            alt="logo"
            src="/images/consultant.png"
            width={150}
            height={70}
            onClick={() => {
              router.push("/");
            }}
          /> */}
        </div>

        <div
          className={
            styles.menu_list + " " + "col-9 col-xl-7 p-0 d-lg-flex d-none"
          }
        >
          {TAG.map((item, index) => {
            return (
              <div key={index}>
                <Link href={item.url} key={index}>
                  {item.dropdown ? (
                    <a
                      className={
                        isAsPath.includes(checkActive(item.tag))
                          ? [styles.link, styles.dropdown, styles.active].join(
                              " "
                            )
                          : [styles.link, styles.dropdown].join(" ")
                      }
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>{item.name}</span>

                      <ul className={styles.dropdown_menu}>
                        {item.tabSub.map((itemChild, index) => {
                          return (
                            <li
                              className={
                                isAsPath.includes(checkActive(itemChild.tag))
                                  ? [styles.dropdown_item, styles.active].join(
                                      " "
                                    )
                                  : styles.dropdown_item
                              }
                              onClick={() => {
                                router.push(itemChild.url);
                              }}
                              key={index}
                            >
                              {itemChild.name}
                            </li>
                          );
                        })}
                      </ul>
                    </a>
                  ) : (
                    <a
                      className={
                        isAsPath.includes(checkActive(item.tag))
                          ? [styles.link, styles.active].join(" ")
                          : styles.link
                      }
                    >
                      {item.name}
                    </a>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
        <div
          className={
            styles.menu_list_mobile +
            " " +
            "col-9 col-xl-7 p-0 d-lg-none d-flex justify-content-end align-items-center pe-3 cursor-pointer"
          }
        >
          {/* <i class="fas fa-bars"></i> */}
          <label for="check" class="bar">
            <input id="check" type="checkbox" />

            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>

            <div class="mobile_dropdown">
              <div className={styles.menu_list_mobile_dropdown}>
                {TAG.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link href={item.url} key={index}>
                        {item.dropdown ? (
                          <a
                            className={
                              isAsPath.includes(checkActive(item.tag))
                                ? [
                                    styles.link,
                                    styles.dropdown,
                                    styles.active,
                                  ].join(" ")
                                : [styles.link, styles.dropdown].join(" ")
                            }
                            onClick={(e) => e.preventDefault()}
                          >
                            <span
                              style={{
                                backgroundColor: "transparent",
                              }}
                            >
                              {item.name}
                            </span>

                            <ul className={styles.dropdown_menu}>
                              {item.tabSub.map((itemChild, index) => {
                                return (
                                  <li
                                    className={
                                      isAsPath.includes(
                                        checkActive(itemChild.tag)
                                      )
                                        ? [
                                            styles.dropdown_item,
                                            styles.active,
                                          ].join(" ")
                                        : styles.dropdown_item
                                    }
                                    onClick={() => {
                                      router.push(itemChild.url);
                                    }}
                                    key={index}
                                  >
                                    {itemChild.name}
                                  </li>
                                );
                              })}
                            </ul>
                          </a>
                        ) : (
                          <a
                            className={
                              isAsPath.includes(checkActive(item.tag))
                                ? [styles.link, styles.active].join(" ")
                                : styles.link
                            }
                          >
                            {item.name}
                          </a>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </label>
        </div>

        {/* <div className={styles.group_btn + " " + "col-3 p-0 pt-2"}>
          <button>Log in</button>
          <button className={styles.active}>Sign up</button>
        </div> */}
      </div>
    </Navbar>
  );
}

export default Header;
