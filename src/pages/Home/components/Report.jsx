import React from "react";
import styled from "styled-components";
import { imgReport, imgReport02 } from "../../../assets";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0;
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
    background: no-repeat center/100% url(${imgReport});
  `, 
  Image2: styled.div`
    width: 100%;
    height: 550px;
    background: no-repeat center/100% url(${imgReport02});
  `,
};

const Report = () => {
  const animatedItem = useScrollFadeIn("up", 1, 0);
  const animatedItem2 = useScrollFadeIn("up", 1, 0.2);

  return (
    <S.Wrapper>
      <S.Label>Report</S.Label>
      <S.Title>컴플라이언스에 최적화된 보안 상세 결과보고서 제공</S.Title>
      <S.Description>
        보안 담당자들이 100% 활용할 수 있고, 컴플라이언스에 특화되어 클라우드{" "}
        <br />
        보안 이슈를 대응할 수 있도록 자세한 정보를 워드 및 엑셀 형태 보고서로
        제공합니다.
      </S.Description>
      <S.ItemWrapper>
        <S.Image {...animatedItem} />
        <S.Image2 {...animatedItem2} />
      </S.ItemWrapper>
    </S.Wrapper>
  );
};

export default Report;
