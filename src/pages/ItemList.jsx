import React from 'react';
import LensItem from '../components/common/LensItem';
import styled from 'styled-components';

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

const StyledLensDIv = styled.div`
  margin: 40px 0px 40px 0px;
`;

export default function ItemList() {
  return (
    <>
      <StyledListTitle>
        <StyledLensDIv>LENS</StyledLensDIv>
        <button>ALL</button>
        <button>1DAY</button>
        <button>1MONTH</button>
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
    </>
  );
}
