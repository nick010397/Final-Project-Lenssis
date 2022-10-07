import React from 'react';
import styled from 'styled-components';

const StyledFooterContainer = styled.div`
  margin-right: 8vw;
  margin-left: 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  margin-left: 8vw;
  margin-bottom: 10px;
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
export default function Footer() {
  return (
    <>
      <StyledFooter>
        <StyledLogo
          src="https://lenssis.jp/data/common/logo_img?ver=20211014"
          alt="렌시스 로고"
        />
        <StyledFooterContainer>
          <div>
            <p>
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
            </p>
          </div>

          <div>
            <div>CONTACT</div>
            <p>주식회사VIVA</p>

            <p>LINE ID</p>
            <p>jp.lenssis</p>

            <p>전화번호</p>
            <p>050-3558-4887</p>

            <p>영업시간</p>
            <p>
              평일 10:00~17:30
              <br />
              SAT/SUN/HOLIDAY OFF
            </p>

            <p>
              ※전화는 매우 연결되기 어려워지고 있으므로
              <br />
              공식 LINE에서 문의 부탁드리겠습니다.
            </p>
          </div>

          <div>
            <div>ABOUT</div>
            <ul>
              <a href="">
                <li>공지</li>
              </a>

              <a href="">
                <li>이용약관 및 정책</li>
              </a>

              <a href="">
                <li>개인 정보 보호 정책</li>
              </a>

              <a href="">
                <li>쇼핑 가이드</li>
              </a>

              <a href="">
                <li>특정 상거래에 관한 법률에 근거한 표기</li>
              </a>

              <a href="">
                <li>모바일 디스플레이</li>
              </a>
            </ul>
          </div>

          <div>
            <div>FOLLOW US</div>
            <StyledSnsLogo>
              <img src="" alt="인스타" />
              <img src="" alt="트위터" />
              <img src="" alt="라인" />
            </StyledSnsLogo>
            <StyledSnsLogo>
              <img src="" alt="아메바" />
              <img src="" alt="유튜브" />
              <img src="" alt="틱톡" />
            </StyledSnsLogo>
          </div>
        </StyledFooterContainer>
      </StyledFooter>
    </>
  );
}
