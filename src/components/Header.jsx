import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Button from "./Button";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";
import styles from "./Header.module.css";

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: ${({ isScroll, theme }) =>
      isScroll ? theme.palette.black : "none"};
    box-shadow: ${(props) =>
      props.isScroll ? "0 0 16px 8px rgba(0, 0, 0, 0.03)" : "none"};
  `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    transition: all 0.2s ease-in-out;
    height: ${(props) => (props.isScroll ? "70px" : "100px")};
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Logo: styled.span`
    color: ${({ isScroll, theme }) =>
      isScroll ? theme.palette.white : theme.palette.white};
    font-weight: 900;
    font-size: 1.5rem;
    flex: 0 0 25%;
    max-width: 25%;
    & img {
      width: 120px;
    }
  `,

  Navigation: styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
  `,
  // NavigationItem: styled.a`
  //   color: ${(props) => props.theme.palette.white};
  //   color: ${({ isScroll, theme }) =>
  //     isScroll ? theme.palette.white : theme.palette.white};
  //   margin: 0 1rem;
  //   cursor: pointer;
  //   &:hover {
  //     opacity: 0.5;
  //   }
  // `,

  ButtonWrapper: styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    justify-content: flex-end;
  `,
};

const NAVIGATION_ITEMS = [
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
    children: [],
  },
];

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true);
    }
    if (window.pageYOffset === 0) {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousewheel", handleScroll);
    return () => {
      window.removeEventListener("mousewheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        <S.Logo isScroll={isScroll}>
          <img src="images/logo.png" alt="logo" />
        </S.Logo>
        {/* <S.Navigation>
          {NAVIGATION_ITEMS.map((item) => (
            <S.NavigationItem key={item} isScroll={isScroll}>
              {item}
            </S.NavigationItem>
          ))}
        </S.Navigation> */}
        <S.Navigation>
          {NAVIGATION_ITEMS.map(({ id, name, children }) => {
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
        </S.Navigation>
        <S.ButtonWrapper>
          <Button fill="solid" type="button" style={{ marginLeft: "auto" }}>
            브로셔 다운로드
          </Button>
        </S.ButtonWrapper>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
