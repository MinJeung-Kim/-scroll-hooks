import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    margin-top: 680px;
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
    margin-bottom: 4rem;
  `,
  ItemWrapper: styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: space-between;
  `,
  ItemBox: styled.li`
    width: 380px;
    padding: 3rem 2rem;
    text-align: center;
    background-color: ${(props) => props.theme.palette.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
  `,
  ItemTitle: styled.h3`
    ${(props) => props.theme.typography.heading};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  ItemDescription: styled.p`
    ${(props) => props.theme.typography.description};
    margin-bottom: 1.5rem;
  `,
  ItemButton: styled.button`
    ${(props) => props.theme.typography.textbutton};
    color: ${(props) => props.theme.palette.secondary};
    margin-top: auto;
    cursor: pointer;
  `,
};

const SERVICES_ITEMS = [
  {
    title: "취약점 진단",
    description:
      "정보보안 전문가들이 직접 연구 개발한 진단 엔진 최신 보안 진단 항목의 빠른 업데이트 및 정확한 탐지로 인한 낮은 오탐률.",
    button: "Get started",
  },
  {
    title: "컴플라이언스 지원",
    description: "국내외 컴플라이언스 지원.",
    button: "Switch over",
  },
  {
    title: "결과 보고서 제공",
    description:
      "컴플라이언스 규제에 적합한 워드, 엑셀 형태 보고서 지원 및 상세 조치방안 제공.",
    button: "Read more",
  },
  {
    title: "다양한 클라우드 지원",
    description:
      "다양한 클라우드 플랫폼 지원 및 암호화를 사용한 안전한 키 관리.",
    button: "Get started",
  },
  {
    title: "체계적인 스케줄 관리",
    description: "스케줄을 등록하여 예약진단.",
    button: "Switch over",
  },
  {
    title: "리소스 시각화",
    description: "시각화를 통한 리소스 관리 및 자산목록 관리.",
    button: "Read more",
  },
];

const Services = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
    3: useScrollFadeIn("up", 1, 0.4),
    4: useScrollFadeIn("up", 1, 0.5),
    5: useScrollFadeIn("up", 1, 0.6),
  };

  return (
    <S.Wrapper>
      <S.Label>Services</S.Label>
      <S.Title>
        보안전문가들이 개발한
        <br />
        클라우드 보안 자동화 시스템
      </S.Title>
      <S.ItemWrapper>
        {SERVICES_ITEMS.map((item, index) => (
          <S.ItemBox key={item.title} {...animatedItem[index]}>
            <S.ItemTitle>{item.title}</S.ItemTitle>
            <S.ItemDescription>{item.description}</S.ItemDescription>
            <S.ItemButton>{item.button}</S.ItemButton>
          </S.ItemBox>
        ))}
      </S.ItemWrapper>
    </S.Wrapper>
  );
};

export default Services;
