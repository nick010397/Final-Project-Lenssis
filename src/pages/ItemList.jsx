import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import AllLens from '../static/img/All_Lens.png';
import LensItem from '../components/common/LensItem';

export default function ItemList() {
  return (
    <>
      <NavBar />
      <StyledListTitle>
        <div>
          <StyledLensImg src={AllLens} alt="AllLens" />
        </div>
      </StyledListTitle>
      <Center>
        <Button category>ALL</Button>
        <Button category>1DAY</Button>
        <Button category>1MONTH</Button>
      </Center>
      <LensItem />
      <StyledPageBtns>
        <StyledPageBtn>1</StyledPageBtn>
        <StyledPageBtn>2</StyledPageBtn>
        <StyledPageBtn>3</StyledPageBtn>
        <StyledPageBtn>4</StyledPageBtn>
        <StyledPageBtn>5</StyledPageBtn>
        <StyledPageBtn>▶</StyledPageBtn>
      </StyledPageBtns>
      <Footer />
    </>
  );
}

const Center = styled.div`
  text-align: center;
`;

const StyledListTitle = styled.div`
  margin: 0 8vw 0 8vw;
`;

const StyledPageBtns = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const StyledPageBtn = styled.button`
  margin: 5px;
  width: 48px;
  height: 48px;
  background: #23314a;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #ffffff;
`;

const StyledLensImg = styled.img`
  margin: 40px 0px 40px 0px;
`;
