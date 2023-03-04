import React from "react";
import { MdSecurity } from "react-icons/md";
import { AiFillContainer } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { TiChartBar } from "react-icons/ti";
import Button from "../../components/common/Button/Button";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div>
      <NavigationBar />
      <div className={`${styles.container} ${styles.main}`}>
        <h1 className={styles.text_white}>
          We Care Your Security
          <br /> International Information Security
        </h1>
        <p>클라우드 보안의 해결책은 D-CLO입니다.</p>
        <Button title={"Get a demo"} />
      </div>
      <div className={`${styles.container} ${styles.main_2}`}>
        <div className={styles.pattern_dots_background}></div>

        <h1 className={styles.title}>
          보안전문가들이 개발한
          <span className={styles.accent}>클라우드 보안 자동화</span> 시스템
        </h1>
        <p className={styles.title_sub}>
          D-CLO는 화이트 해커들의 실무적인 보안 컨설팅 경험을 바탕으로 보안
          엔진을 개발하여 실질적인 보안성을 향상시키고, 클라우드 보안 취약점을
          지속적으로 점검하여 규제에 대응할 수 있는 솔루션입니다.
        </p>
        <div className={styles.row}>
          <div className={styles.col}>
            <i className={styles.service_item}>
              <MdSecurity />
            </i>
            <h5>취약점 진단</h5>
            <ul>
              <li>
                · 정보보안 전문가들이 직접 연구 개발한 진단 엔진 최신 보안 진단
              </li>
              <li>· 항목의 빠른 업데이트 정확한 탐지 및 낮은 오탐률</li>
            </ul>
          </div>
          <div className={styles.col}>
            <i className={styles.service_item}>
              <AiFillContainer />
            </i>
            <h5>컴플라이언스 지원</h5>
            <ul>
              <li>· 국내외 컴플라이언스 지원</li>
            </ul>
          </div>
          <div className={styles.col}>
            <i className={styles.service_item}>
              <FaChartPie />
            </i>
            <h5>결과 보고서 제공</h5>
            <ul>
              <li>· 컴플라이언스 규제에 적합한 워드, 엑셀 형태 보고서 지원</li>
              <li>· 상세 조치방안 제공</li>
            </ul>
          </div>
          <div className={styles.col}>
            <i className={styles.service_item}>
              <TiChartBar />
            </i>
            <h5>리소스 시각화</h5>
            <ul>
              <li>· 시각화를 통한 리소스 관리 자산목록 관리</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.main_3}`}>
        <h1 className={styles.title}>
          D-CLO와 함께
          <span className={styles.accent}> 취약점 진단에 따른 이슈사항</span>을
          한눈에 파악하고,
          <span className={styles.accent}>지속적인 모니터링</span>으로 클라우드
          보안과 가시성을 한번에 확보하세요.
        </h1>
        <img src="images/main.png" alt="" />
      </div>
      <div className={`${styles.container} ${styles.main_2}`}>
        <h1 className={styles.title}>D-CLO만의 컴플라이언스 관리</h1>
        <p className={styles.title_sub}>
          한번의 스캔으로 클라우드 자산의 보안 컴플라이언스 준수 여부를 손쉽게
          확인할 수 있습니다.
        </p>

        <div className={styles.content}>
          <div className={styles.content_col}>
            <img src="images/ruleIcons/ISMS-P.png" alt="" />
            <img src="images/ruleIcons/sub04_img01.png" alt="" />
            <img src="images/ruleIcons/FSI_logo.png" alt="" />
          </div>
          <div className={styles.content_col}>
            <img src="images/ruleIcons/iso_27001_05.png" alt="" />
            <img src="images/ruleIcons/NIST-Logos.png" alt="" />
            <img src="images/ruleIcons/PNG_PCI.png" alt="" />
            <img src="images/ruleIcons/CIS_Logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
