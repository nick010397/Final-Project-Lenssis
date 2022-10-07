import React from 'react';
import LensItem from '../components/LensItem';
import styled from 'styled-components';

const StyledListTitle = styled.div`
  margin: 0 8vw 0 8vw;
`;

const StyledPageBtn = styled.div`
  text-align: center;
`;
export default function ItemList() {
  return (
    <>
      <StyledListTitle>
        <div>LENS</div>
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
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>▶</button>
      </StyledPageBtn>
    </>
  );
}
