import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/CategoryBtn';
import LensItem from '../components/common/LensItem';
import { useGetProductList } from '../api/productApi';
import FilterMenu from '../components/main/FilterMenu';
import { useParams } from 'react-router';
import PageBtn from '../components/itemList/PageBtn';

export default function ItemList() {
  const { page } = useParams();
  console.count(page);
  const { data, isLoading, isError } = useGetProductList(page);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>error</h2>;
  }
  return (
    <>
      {console.log(data.data.data)}
      <StyledListTitle>
        <TitleName>ALL LENS</TitleName>
      </StyledListTitle>
      <Center>
        <Button category>ALL</Button>
        <Button category>1DAY</Button>
        <Button category>1MONTH</Button>
      </Center>
      <FilterMenu />
      <MenuHr />
      <LensItem products={data.data.data} />
      <StyledPageBtns>
        <PageBtn currentPage={page} />
      </StyledPageBtns>
    </>
  );
}

const Center = styled.div`
  text-align: center;
`;

const StyledListTitle = styled.div`
  margin: 0 8vw 0 8vw;
`;

const StyledPageBtns = styled.div`
  text-align: center;
  margin: 136px;
`;

const MenuHr = styled.hr`
  margin-top: -4px;
  // width:1275px;
  margin-right: 8vw;
  margin-left: 8vw;
  border: 0px;
  border-bottom: 4px solid #d3d6db;
`;

const TitleName = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 60px;
  letter-spacing: -0.016em;
  color: #23314a;
  margin: 70px 0px;
`;
