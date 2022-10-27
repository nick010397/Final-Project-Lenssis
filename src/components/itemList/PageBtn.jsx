import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

export default function PageBtn({ currentPage }) {
  const pages = [1, 2, 3];
  const navigate = useNavigate();

  return (
    <>
      {pages.map((page, index) => {
        return (
          <Link to={`/itemlist/${page}`} key={index}>
            <StyledPageBtn className={currentPage === page && 'active'}>
              {page}
            </StyledPageBtn>
          </Link>
        );
      })}
      <StyledPagenationBtn
        onClick={() => {
          if (currentPage < pages.length) {
            navigate(`/itemlist/${Number(currentPage) + 1}`);
          }
        }}
      >
        ▶
      </StyledPagenationBtn>
    </>
  );
}

const StyledPageBtn = styled.button`
  margin: 5px;
  width: 48px;
  height: 48px;
  background: #e9eaed;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #23314a;
  border: 0;
  &.active {
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
  }
`;

const StyledPagenationBtn = styled.button`
  margin: 5px;
  width: 48px;
  height: 48px;
  background: #e9eaed;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #23314a;
  border: 0;
  &:hover {
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
  }
`;
