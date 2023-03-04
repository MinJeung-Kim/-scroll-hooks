import React from "react";
import styled from "styled-components";
import { heroBackground } from "../../../assets";
import Button from "../../../components/Button";

const S = {
  Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 780px;

    background: no-repeat center/cover
        linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)),
      url(${heroBackground});
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.h1`
    ${(props) => props.theme.typography.title};
    text-align: center;
    color: #fff;
    margin-bottom: 0.5rem;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.white};
    margin-bottom: 2rem;
  `,
};

const Hero = () => {
  return (
    <S.Background>
      <S.Wrapper>
        <S.Title>
          We Care Your Security
          <br />
          International Information Security
        </S.Title>
        <S.Description>클라우드 보안의 해결책은 D-CLO입니다.</S.Description>
        <Button fill="solid" type="button">
          Get a demo
        </Button>
      </S.Wrapper>
    </S.Background>
  );
};

export default Hero;
