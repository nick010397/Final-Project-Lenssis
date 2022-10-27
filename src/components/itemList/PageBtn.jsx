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
            <StyledPageBtn className={currentPage === String(page) && 'active'}>
              {page}
            </StyledPageBtn>
          </Link>
        );
      })}
      <StyledPageBtn
        onClick={() => {
          if (currentPage < pages.length) {
            navigate(`/itemlist/${Number(currentPage) + 1}`);
          }
        }}
      >
        ▶
      </StyledPageBtn>
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

  &:hover {
    background: #23314a;
    color: #ffffff;
    cursor: pointer;
  }

  &.active {
    background: #23314a;
    color: #ffffff;
  }
`;
