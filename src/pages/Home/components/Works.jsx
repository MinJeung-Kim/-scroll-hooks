import React from "react";
import styled from "styled-components";
import {
  worksImage01,
  worksImage02,
  worksImage03,
  worksImage04,
  worksImage05,
  worksImage06,
  worksImage07,
} from "../../../assets";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled.p`
    display: inline-block;
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.black};
    text-align: center;
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 4rem;
  `,
  List: styled.ul`
    width: 95%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    margin-bottom: 4rem;
  `,
  ListItem: styled.li``,
  ItemImage: styled.div`
    width: 100%;
    height: 200px;
    background: no-repeat center/185px url(${(props) => props.image});
  `,
  TextContainer: styled.div`
    padding: 2rem;
  `,
  ItemTitle: styled.h3`
    ${(props) => props.theme.typography.heading};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 0.75rem;
  `,
  ItemLabel: styled.p`
    ${(props) => props.theme.typography.caption};
    color: ${(props) => props.theme.palette.gray};
    font-weight: 400;
    margin-bottom: 1.5rem;
  `,
  ItemDesciption: styled.p`
    ${(props) => props.theme.typography.description};
    margin-bottom: 1.5rem;
  `,
  TextButton: styled.button`
    width: fit-content;
    padding: 0;
    ${(props) => props.theme.typography.textbutton};
    color: ${(props) => props.theme.palette.secondary};
    cursor: pointer;
  `,
};

const WORKS_ITEMS = [
  {
    image: worksImage01,
  },
  {
    image: worksImage02,
  },
  {
    image: worksImage03,
  },
  {
    image: worksImage04,
  },
  {
    image: worksImage05,
  },
  {
    image: worksImage06,
  },
  {
    image: worksImage07,
  },
];

const Works = () => {
  const animatedItem = {
    0: useScrollFadeIn("left", 1),
    1: useScrollFadeIn("left", 1, 0.2),
    2: useScrollFadeIn("left", 1, 0.4),
    3: useScrollFadeIn("left", 1, 0.6),
    4: useScrollFadeIn("left", 1, 0.8),
    5: useScrollFadeIn("left", 1, 1),
    6: useScrollFadeIn("left", 1, 1.2),
  };

  return (
    <S.Wrapper>
      <S.Label>compliance</S.Label>
      <S.Title>D-CLO만의 컴플라이언스 관리</S.Title>
      <S.Description>
        한번의 스캔으로 클라우드 자산의 보안 컴플라이언스 준수 여부를 손쉽게
        확인할 수 있습니다.
      </S.Description>
      <S.List>
        {WORKS_ITEMS.map((item, index) => (
          <S.ListItem key={index} {...animatedItem[index]}>
            <S.ItemImage image={item.image} />
            {/* <S.TextContainer>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemLabel>{item.label}</S.ItemLabel>
              <S.ItemDesciption>{item.description}</S.ItemDesciption>
              <S.TextButton>Read more</S.TextButton>
            </S.TextContainer> */}
          </S.ListItem>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default Works;
