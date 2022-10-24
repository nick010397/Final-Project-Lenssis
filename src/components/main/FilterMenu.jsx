import React from 'react';
import styled from 'styled-components';

function FilterMenu() {
  return (
    <CenterDiv>
      {MenuItem.map((data) => (
        <CategroyDiv key={data.title}>
          <MenuATag href={data.url}>{data.title}</MenuATag>
        </CategroyDiv>
      ))}
    </CenterDiv>
  );
}

const MenuItem = [
  {
    title: '人気順',
    url: 'http://localhost:3000',
  },
  {
    title: '新着順',
    url: 'http://localhost:3000',
  },
  {
    title: '価格が低い順',
    url: 'http://localhost:3000',
  },
  {
    title: '価格が高い順',
    url: 'http://localhost:3000',
  },
  {
    title: 'レビュー件数順',
    url: 'http://localhost:3000',
  },
];
const CenterDiv = styled.div`
  display: flex;
  margin-left: 8vw;
  margin-right: 8vw;
  margin-top: 80px;
`;

const MenuATag = styled.a`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #656f80;
  text-decoration: none;
`;

const CategroyDiv = styled.div`
  text-align: center;
  padding-right: 22px;
  padding-left: 22px;
  padding-bottom: 10px;
  &:hover {
    ${MenuATag} {
      color: #23314a;
    }
    border-bottom: 4px solid #23314a;
  }
`;
export default FilterMenu;
