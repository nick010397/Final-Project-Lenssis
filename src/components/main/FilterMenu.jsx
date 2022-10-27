import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function FilterMenu() {
  return (
    <CenterDiv>
      {MenuItem.map((data) => (
        <StyledLink
          to={data.url}
          key={data.title}
          onClick={(e) => e.preventDefault()}
        >
          <CategroyDiv className="first_Menu">
            <MenuContent>{data.title}</MenuContent>
          </CategroyDiv>
        </StyledLink>
      ))}
    </CenterDiv>
  );
}

const MenuItem = [
  {
    title: '人気順',
    url: '/',
  },
  {
    title: '新着順',
    url: '/',
  },
  {
    title: '価格が低い順',
    url: '/',
  },
  {
    title: '価格が高い順',
    url: '/',
  },
  {
    title: 'レビュー件数順',
    url: '/',
  },
];
const CenterDiv = styled.div`
  display: flex;
  margin-left: 10.5vw;
  margin-right: 10.5vw;
  margin-top: 80px;
  .first_Menu {
    padding-left: 18px;
  }
`;

const MenuContent = styled.p`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #656f80;
  text-decoration: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const CategroyDiv = styled.div`
  padding-right: 22px;
  padding-left: 22px;
  padding-bottom: 10px;
  &:hover {
    ${MenuContent} {
      color: #23314a;
    }
    border-bottom: 4px solid #23314a;
    padding-bottom: 5px;
    cursor: pointer;
  }
`;
export default FilterMenu;
