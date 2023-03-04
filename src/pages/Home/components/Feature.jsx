import React from "react";
import styled from "styled-components";
import { featureImage } from "../../../assets";
import useScrollClipPath from "../../../hooks/useScrollClipPath";

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 580px;
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
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  List: styled.ul`
    width: fit-content;
    margin-bottom: 2rem;
  `,
  ListItem: styled.p`
    ${(props) => props.theme.typography.description};
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme.palette.lightgray};
    span {
      color: ${(props) => props.theme.palette.secondary};
    }
  `,
  TextButton: styled.button`
    width: fit-content;
    ${(props) => props.theme.typography.textbutton};
    color: ${(props) => props.theme.palette.secondary};
    cursor: pointer;
  `,
  Image: styled.div`
    width: 100%;
    height: 550px;
    border-radius: 1rem;
    border: 1px solid rgba(2, 2, 69, 0.2);
    background: no-repeat center/cover url(${featureImage});
  `,
};

const Feature = () => {
  const animatedImage = useScrollClipPath();

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Label>Features</S.Label>
        <S.Title>
          취약점 진단에 따른 <br />
          이슈사항 파악
        </S.Title>
        <S.Description>
          D-CLO와 함께 약점 진단에 따른 이슈사항을 <br /> 한눈에 파악하고,
          지속적인 모니터링으로 <br /> 클라우드 보안과 가시성을 한번에
          확보하세요.
        </S.Description>
        <S.TextButton>Read more about our serives</S.TextButton>
      </S.TextWrapper>
      <S.Image {...animatedImage} />
    </S.Wrapper>
  );
};

export default Feature;
