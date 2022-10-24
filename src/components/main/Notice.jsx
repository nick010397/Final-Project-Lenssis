import React from 'react';
import styled from 'styled-components';
import stroke from '../../static/img/Vector.png';

function Notice() {
  return (
    <NoticeDiv>
      <P>2022.09.29</P>
      <NoticeATag href="/notice">
        ☆生産中止予定商品7種復活のお知らせ☆{' '}
      </NoticeATag>
      <NoticeVectorTag href="/notice">
        <img link="/notice" src={stroke} alt="이동하기" />
      </NoticeVectorTag>
      <Hr />
    </NoticeDiv>
  );
}

const NoticeDiv = styled.div`
  width: 1200px;
  display: block;
  margin: auto;
`;

const P = styled.p`
  margin-bottom: 12px;
`;

const NoticeATag = styled.a`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const NoticeVectorTag = styled.a`
  margin-left: 833.5px;
`;

const Hr = styled.hr`
  width: 1200px;
  height: 1px;
  background: #d3d6db;
  text-align: center;
  border: 0;
  margin-top: 30px;
  margin-bottom: 29px;
`;

export default Notice;
