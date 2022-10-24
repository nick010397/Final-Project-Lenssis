import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function StyledPagesBtn() {
  const pages = 10;
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...numberOfPages];
    if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, '...', numberOfPages.length];
    } else if (currentButton === 3) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, '...', numberOfPages.length];
    } else if (currentButton > 3 && currentButton.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        '...',
        ...sliced1,
        ...sliced2,
        '...',
        numberOfPages.length,
      ];
    }
    setArrOfCurrButtons(tempNumberOfPages);
  }, [currentButton]);

  return (
    <>
      {arrOfCurrButtons.map((page, index) => {
        return (
          <StyledPageBtn
            key={index}
            className={currentButton === page && 'active'}
            onClick={() => setCurrentButton(page)}
          >
            {page}
          </StyledPageBtn>
        );
      })}
      <StyledPageBtn
        onClick={() =>
          setCurrentButton((prev) =>
            prev === numberOfPages.length + 1 ? prev : prev + 1
          )
        }
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
