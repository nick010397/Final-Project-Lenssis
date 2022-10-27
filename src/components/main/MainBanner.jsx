import React from 'react';
import styled from 'styled-components';
import banner1 from '../../static/img/banner1.png';
import banner2 from '../../static/img/banner2.png';
import banner3 from '../../static/img/banner3.png';
import { Link } from 'react-router-dom';

function MainBanner() {
  return (
    //링크는 임시로.
    <Grid>
      <FirstItem className="one">
        <Link to="/">
          <img src={banner1} alt="배너1" />
        </Link>
      </FirstItem>
      <SecondItem className="two">
        <Link to="/">
          <img src={banner2} alt="배너2" />
        </Link>
      </SecondItem>
      <ThirdItem className="three">
        <Link to="/">
          <img src={banner3} alt="배너3" />
        </Link>
      </ThirdItem>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 592px);
`;

const FirstItem = styled.div`
  background-color: gray;
  &.one {
    height: 592px;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;
const SecondItem = styled.div`
  background-color: gray;
  &.two {
    height: 220px;
  }
`;
const ThirdItem = styled.div`
  background-color: gray;
  &.three {
    grid-row-start: 2;
    height: 356px;
  }
`;

export default MainBanner;
