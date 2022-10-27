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
      <AllLens>
        {data.data.data?.map((product) => {
          return <LensItem key={product.id} {...product} />;
        })}
      </AllLens>
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
  margin-right: 10.5vw;
  margin-left: 10.5vw;
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

const AllLens = styled.div`
  cursor: pointer;
  position: relative;
  margin: 0 8vw 16px 8vw;
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-gap: 25px;
  justify-content: center;
`;
