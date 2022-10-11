import React from 'react';
import styled from 'styled-components';
import banner from '../../img/Banner_Header.jpeg';

const StyledmarketingBanner = styled.img`
  width: 100vw;
  height: 56px;
  left: 0px;
  top: 0px;
  background: #f5f5f5;
  text-align: center;
`;
const StyledNavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Styledlogo = styled.div`
  margin-left: 8vw;
  width: 92.18px;
  height: 20px;
  left: 360px;
  top: 30px;
`;

const StyledLogoImg = styled.img`
  width: 92.18px;
  height: 20px;
`;
const StyledIconsDiv = styled.div`
  margin-right: 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledInput = styled.div`
  margin-left: 50vw;
`;

export default function NavBar() {
  return (
    <>
      <StyledmarketingBanner src={banner} alt="마케팅 배너" />
      <StyledNavItem id="Lens" class="nav-items">
        <Styledlogo>
          <a href="/">
            <StyledLogoImg
              src="https://lenssis.jp/data/common/logo_img?ver=20211014"
              alt="렌시스 로고"
            />
          </a>
        </Styledlogo>
        <StyledInput id="serch" class="nav-item">
          <input type="text" />
        </StyledInput>

        <StyledIconsDiv>
          <div class="nav-item">
            <a href="">
              <img src="" alt="마이페이지" />
            </a>
          </div>
          <div class="nav-item">
            <a href="">
              <img src="" alt="장바구니" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="" alt="메뉴" />
            </a>
          </div>
        </StyledIconsDiv>
      </StyledNavItem>
    </>
  );
}
