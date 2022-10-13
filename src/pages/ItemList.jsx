import React from 'react';
import LensItem from '../components/itemList/LensItem';
import styled from 'styled-components';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import AllLens from '../static/img/All_Lens.png';
import CategoryBtn from '../components/itemList/CategoryBtn.jsx';

const StyledListTitle = styled.div`
  margin: 0 8vw 0 8vw;
`;

const StyledPageBtn = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const StyledBtn = styled.button`
  margin: 5px;
`;

const StyledLensImg = styled.img`
  margin: 40px 0px 40px 0px;
`;

export default function ItemList() {
  return (
    <>
      <NavBar />
      <StyledListTitle>
        <div>
          <StyledLensImg src={AllLens} alt="AllLens" />
        </div>
        <CategoryBtn />
      </StyledListTitle>
      <LensItem />
      <LensItem />
      <LensItem />
      <LensItem />
      <LensItem />
      <LensItem />
      <LensItem />
      <LensItem />
      <LensItem />
      <LensItem />
      <StyledPageBtn>
        <StyledBtn>1</StyledBtn>
        <StyledBtn>2</StyledBtn>
        <StyledBtn>3</StyledBtn>
        <StyledBtn>4</StyledBtn>
        <StyledBtn>5</StyledBtn>
        <StyledBtn>▶</StyledBtn>
      </StyledPageBtn>
      <Footer />
    </>
  );
}
