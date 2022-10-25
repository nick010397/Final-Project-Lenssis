import React from 'react';
import styled from 'styled-components';
import Instagram from '../../static/img/Instagram.png';
import Twiiter from '../../static/img/Twiiter.png';
import LINE from '../../static/img/LINE.png';
import Ameba from '../../static/img/Ameba.png';
import Youtube from '../../static/img/YouTube.png';
import TikTok from '../../static/img/TikTok.png';
import Logo from '../../static/img/Lensis_Logo.png';

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <StyledLogo src={Logo} alt="렌시스 로고" />
        <StyledFooterContainer>
          <div>
            <div>
              <p>
                렌시스는 #나다움에서 출발했습니다.
                <br />
                렌즈에 나를 맞추는 게 아닌,
                <br />
                나에게 맞는 렌즈를 제안해주고 싶었습니다.
                <br />
              </p>
              <br />
              <p>
                나로 시작하는 렌즈,
                <br />
                #JUST_BE_YOURSELF
              </p>
            </div>
          </div>

          <div>
            <StyledTitleDiv>CONTACT</StyledTitleDiv>
            <p>주식회사VIVA</p>
            <ul>
              <li>
                <StyledItem>
                  <p>LINE ID</p>
                  <p>jp.lenssis</p>
                </StyledItem>
              </li>
              <li>
                <StyledItem>
                  <p>전화번호</p>
                  <p>050-3558-4887</p>
                </StyledItem>
              </li>
              <li>
                <StyledItem>
                  <p>영업시간</p>
                  <p>
                    평일 10:00~17:30
                    <br />
                    SAT/SUN/HOLIDAY OFF
                  </p>
                </StyledItem>
              </li>
              <li>
                <p>
                  ※전화는 매우 연결되기 어려워지고 있으므로
                  <br />
                  공식 LINE에서 문의 부탁드리겠습니다.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <StyledTitleDiv>ABOUT</StyledTitleDiv>
            <ul>
              <li>공지</li>

              <li>이용약관 및 정책</li>

              <li>개인 정보 보호 정책</li>

              <li>쇼핑 가이드</li>

              <li>특정 상거래에 관한 법률에 근거한 표기</li>

              <li>모바일 디스플레이</li>
            </ul>
          </div>

          <div>
            <StyledTitleDiv>FOLLOW US</StyledTitleDiv>
            <StyledSnsLogo>
              <StyledLogoImg src={Instagram} alt="인스타" />
              <StyledLogoImg src={Twiiter} alt="트위터" />
              <StyledLogoImg src={LINE} alt="라인" />
            </StyledSnsLogo>
            <StyledSnsLogo>
              <StyledLogoImg src={Ameba} alt="아메바" />
              <StyledLogoImg src={Youtube} alt="유튜브" />
              <StyledLogoImg src={TikTok} alt="틱톡" />
            </StyledSnsLogo>
          </div>
        </StyledFooterContainer>
      </StyledFooter>
    </>
  );
}

const StyledFooterContainer = styled.div`
  margin-right: 8vw;
  margin-left: 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  margin-left: 8vw;
  margin: 100px;
  width: 92.18px;
  height: 20px;
  left: 360px;
  top: 100px;
`;

const StyledSnsLogo = styled.div`
  flex-wrap: wrap;
  align-content: stretch;
`;

const StyledFooter = styled.div`
  background-color: #f5f5f5;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLogoImg = styled.img`
  margin: 18px 16px;
`;

const StyledTitleDiv = styled.div`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.016em;
  color: #23314a;
`;
