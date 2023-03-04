import React from "react";
import styled from "styled-components";
import { imgCustom01 } from "../../../assets";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

const S = {
  Wrapper: styled.section`
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
    margin-bottom: 1rem;
  `,
  ItemWrapper: styled.ul`
    width: 100%;
    display: grid; 
  `,
  Image: styled.div`
    width: 100%;
    height: 550px;
    background: no-repeat center/cover url(${imgCustom01});
  `,
};

const Custom = () => {
  const animatedItem = useScrollFadeIn("up", 1, 0); 

  return (
    <S.Wrapper>
      <S.Label>Custom</S.Label>
      <S.Title>커스텀 컴플라이언스 제공</S.Title>
      <S.Description>
        한번의 스캔으로 클라우드 자산의 보안 컴플라이언스 준수 여부를 손쉽게
        확인할 수 있습니다.
      </S.Description>
      <S.ItemWrapper>
        <S.Image {...animatedItem} /> 
      </S.ItemWrapper>
    </S.Wrapper>
  );
};

export default Custom;
