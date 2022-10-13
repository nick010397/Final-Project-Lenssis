import React from 'react';
import styled from 'styled-components';
import banner from '../../static/img/Banner_Header.jpeg';
import cart from '../../static/img/Icon_Cart.png';
import mypage from '../../static/img/Icon_MyPage.png';
import Search from '../../static/img/Icon_Search.png';

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
        <StyledInputDiv>
          <StyledInput type="text" />
          <StyledInputImg src={Search} alt="" />
        </StyledInputDiv>
        <StyledIconsDiv>
          <div class="nav-item">
            <a href="">
              <StyledMyPageImg src={mypage} alt="마이페이지" />
            </a>
          </div>
          <div class="nav-item">
            <a href="">
              <StyledCartImg src={cart} alt="장바구니" />
            </a>
          </div>
        </StyledIconsDiv>
      </StyledNavItem>
      <StyledMenuContainerDiv>
        <StyledMenuDiv>カラコン</StyledMenuDiv>
        <StyledMenuDiv>新着順</StyledMenuDiv>
        <StyledMenuDiv>パーソナル診断</StyledMenuDiv>
        <StyledMenuDiv>人生カラコン探し</StyledMenuDiv>
        <StyledMenuDiv>私にぴったりのレンズを探す</StyledMenuDiv>
        <StyledBarDiv></StyledBarDiv>
        <StyledMenuDiv>イベント</StyledMenuDiv>
        <StyledMenuDiv>ブランド</StyledMenuDiv>
        <StyledMenuDiv>ブログ</StyledMenuDiv>
        <StyledMenuDiv>お問い合わせ</StyledMenuDiv>
      </StyledMenuContainerDiv>
      <NavBarEndDiv></NavBarEndDiv>
    </>
  );
}

const StyledmarketingBanner = styled.img`
  width: 100vw;
  height: 56.25px;
  left: 0px;
  top: 0px;
  background: #f5f5f5;
  text-align: center;
`;
const StyledNavItem = styled.div`
  width: 100vw;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px;
  margin: auto;
`;

const Styledlogo = styled.div`
  margin-left: 8vw;
  width: 92.18px;
  height: 20px;
  left: 360px;
  top: 22px;
`;

const StyledLogoImg = styled.img`
  width: 92.18px;
  height: 20px;
`;
const StyledIconsDiv = styled.div`
  margin-right: 8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledInputDiv = styled.div`
  height: 64px;
  width: 280px;
`;
const StyledInputImg = styled.img`
  position: absolute;
  left: 5.21%;
  right: 17.71%;
  top: 5.21%;
  bottom: 17.71%;
`;
const StyledInput = styled.input`
  border: 1.5px solid #23314a;
  width: 280px;
  height: 36px;
  left: 1129px;
  top: 14px;
  margin-left: 25vw;
`;
const StyledMyPageImg = styled.img`
  margin: 0px 15px;
  width: 33px;
  height: 34.83px;
`;

const StyledCartImg = styled.img`
  margin: 0px 15px;
  width: 36.67px;
  height: 35.74px;
`;

const StyledMenuContainerDiv = styled.div`
  margin: 0 8vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledMenuDiv = styled.div`
  padding: 8px 16px;
  gap: 10px;
`;

const StyledBarDiv = styled.div`
  width: 2px;
  height: 15px;
  margin-top: 12px;
  background: #656f80;
`;

const NavBarEndDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 1px;
  background-color: #d3d6db;
`;
