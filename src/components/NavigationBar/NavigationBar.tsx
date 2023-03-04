import React, { useState } from "react"; 

import { FiSearch, FiHeart } from "react-icons/fi"; 
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDownSFill  } from "react-icons/ri";

import styles from "./NavigationBar.module.css";
import Button from "../common/Button/Button";

const menu = [
  { id: 1, name: "DCLO CSPM", children: [] },
  {
    id: 2,
    name: "기능 소개",
    icon: <RiArrowDownSFill />,
    children: [
      { title: "컴플라이언스" },
      { title: "시각화" },
      { title: "자산 관리" },
      { title: "보고서" },
    ],
  },
  {
    id: 3,
    name: "Consulting",
    icon: <RiArrowDownSFill />,
    children: [
      { title: "모의해킹" },
      { title: "기술진단" },
      { title: "관리진단" },
    ],
  },
  {
    id: 4,
    name: "회사소개",
    icon: <RiArrowDownSFill />,
    children: [],
  },
  {
    id: 5,
    name: "문의하기", 
    children: [ 
    ],
  },
];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={`${styles.row} ${styles.v_center}`}>
          <div className={`${styles.header_item} ${styles.item_left}`}>
            <img src="images/logo.png" alt="logo" className={styles.logo} />
          </div>
          <div className={`${styles.header_item} ${styles.item_center}`}>
            <div className={styles.menu_overlay}></div>
            <nav className={styles.menu}>
              <div className={styles.mobile_menu_head}>
                <div className={styles.go_back}>
                  <i>
                    <IoIosArrowBack />
                  </i>
                </div>
                <div className={styles.current_menu_title}></div>
                <div className={styles.mobile_menu_close}>&times;</div>
              </div>
              <ul className={styles.menu_main}>
                {menu.map(({ id, name, children }) => {
                  return (
                    <li
                      key={id}
                      className={
                        children.length > 0 ? styles.menu_item_has_children : ""
                      }
                    >
                      <a href="#">
                        {name}
                        {children.length > 0 && (
                          <i>
                            <RiArrowDownSFill />
                          </i>
                        )}
                      </a>
                      {children && (
                        <div
                          className={`${styles.sub_menu} ${styles.single_column_menu}`}
                        >
                          <ul>
                            {children.map(({ title }, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{title}</a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className={`${styles.header_item} ${styles.item_right}`}>
            <Button title={"브로셔 다운로드"} />
            <div className={styles.mobile_menu_trigger}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
