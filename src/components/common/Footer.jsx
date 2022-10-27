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
        <StyledLogoDiv>
          <StyledLogo src={Logo} alt="렌시스 로고" />
        </StyledLogoDiv>

        <StyledFooterContainer>
          <EachFooter>
            <StyledDiv>
              <p>
                レンシスは #私らしさから 出発しました。
                <br />
                レンズに私を合わせるのではなく、
                <br />
                私に合うレンズを提案したかったでした。
                <br />
              </p>
              <br />
              <p>
                私から 始まる レンズ、
                <br />
                #JUST_BE_YOURSELF
              </p>
            </StyledDiv>
          </EachFooter>

          <EachFooter>
            <StyledTitleDiv>CONTACT</StyledTitleDiv>
            <CompanyName>株式会社LENSSIS</CompanyName>

            <StyledItem>
              <InfoName>LINE ID</InfoName>
              <InfoContant>jp.lenssis</InfoContant>
            </StyledItem>

            <StyledItem>
              <InfoName>電話番号</InfoName>
              <InfoContant>050-3558-4887</InfoContant>
            </StyledItem>

            <StyledItem>
              <InfoName>お問い合わせ時間</InfoName>
              <InfoContant>
                平日 10:00~17:30
                <br />
                SAT/SUN/HOLIDAY OFF
              </InfoContant>
            </StyledItem>

            <Precautions>
              ※お電話は大変繋がりにくくなっていますので
              <br />
              公式LINEにてお問い合せお願いいたします。
            </Precautions>
          </EachFooter>

          <EachFooter>
            <StyledTitleDiv>ABOUT</StyledTitleDiv>
            <ul>
              <AboutList>ショッピングガイド</AboutList>

              <AboutList>利用規約とポリシー</AboutList>

              <AboutList>個人情報保護方針</AboutList>

              <AboutList>お知らせ</AboutList>

              <AboutList>特定商取引に関する法律に基づく表記</AboutList>

              <AboutList>モバイル表示</AboutList>
            </ul>
          </EachFooter>

          <EachFooter>
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
          </EachFooter>
        </StyledFooterContainer>
      </StyledFooter>
    </>
  );
}

const StyledFooterContainer = styled.div`
  margin-right: 8vw;
  margin-left: 10.5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EachFooter = styled.div`
  width: 272px;
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.016em;
  color: #7b8392;
`;
const StyledLogo = styled.img`
  margin: 40px;
  width: 92.18px;
  height: 20px;
`;
const StyledLogoDiv = styled.div`
  margin-left: 8vw;
`;
const StyledSnsLogo = styled.div`
  flex-wrap: wrap;
  align-content: stretch;
`;

const StyledFooter = styled.div`
  background-color: #f5f5f5;
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
`;

const StyledLogoImg = styled.img`
  margin: 18px 16px;
  cursor: pointer;
`;

const StyledTitleDiv = styled.div`
  margin-bottom: 12px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const InfoName = styled.div`
  display: flex;
  margin: 8px 20px 8px 0px;
  width: 73px;
  flex-shrink: 0.5;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
`;

const InfoContant = styled.div`
  display: flex;
  margin: 8px 0px;
  flex-shrink: 1.5;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const CompanyName = styled.div`
  margin: 12px 0px;
  width: 109px;
  height: 22px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const Precautions = styled.p`
  width: 272px;
  height: 44px;
  margin-top: 20px;
  margin-bottom: 102px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: -0.016em;
  color: #7b8392;
`;

const AboutList = styled.li`
  margin: 8px 0px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.016em;
  color: #23314a;
`;
