import React from 'react';
import styled from 'styled-components';

function DetailSitPvi() {
  return (
    <Container>
      <Picture>
        <img
          src="https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_1month_7IOB7IS42.jpg"
          alt=""
        />
        <ul>
          <li>
            <img src="" alt="img1" />
          </li>
          <li>
            <img src="" alt="img2" />
          </li>
          <li>
            <img src="" alt="img3" />
          </li>
        </ul>
      </Picture>
    </Container>
  );
}

export default DetailSitPvi;

const Container = styled.div`
  width: 40%;
  height: 600px;
  float: left;
`;

const Picture = styled.div`
  width: 600px;
  height: 700px;
  float: left;
`;
