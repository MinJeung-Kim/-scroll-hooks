import React from "react";
import styled from "styled-components";
import { imgDetail } from "../../../assets";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
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
    text-align: center;
  `,
  ItemWrapper: styled.ul`
    width: 100%;
    display: grid;
  `,
  Image: styled.div`
    width: 100%;
    height: 550px;
    background: no-repeat center/100% url(${imgDetail});
  `,
};

const Detail = () => {
  const animatedItem = useScrollFadeIn("up", 1, 0);

  return (
    <S.Wrapper>
      <S.Label>Detail</S.Label>
      <S.Title>취약점 진단 및 보안 상세 가이드 제공</S.Title>
      <S.Description>
        자체 취약점 진단을 실시하고, 클라우드 설정 오류나 클라우드 취약점에 대해
        조치 방법을 제시하고,<br/> 보안 상세 가이드를 제공하여 예방 및 대응할 수
        있습니다.
      </S.Description>
      <S.ItemWrapper>
        <S.Image {...animatedItem} />
      </S.ItemWrapper>
    </S.Wrapper>
  );
};

export default Detail;
