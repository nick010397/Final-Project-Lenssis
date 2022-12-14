import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function WrapImages({ product }) {
  const [imgChange, setImgChange] = useState();
  const setImg = (imgChange) => {
    setImgChange(imgChange);
  };
  useEffect(() => {
    setImgChange(product.image1);
  }, [product]);

  return (
    <Container>
      <Picture>
        <StyledLensImg src={imgChange} alt="" />
        <MiniPicture>
          <StyledMiniImg
            src={product.image1}
            alt=""
            onMouseEnter={() => setImg(product.image1)}
          />
          <StyledMiniImg
            src="https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_64Z6rO167Cc7IOJ367aE7ZWg.jpg"
            alt=""
            onMouseEnter={() =>
              setImg(
                'https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_64Z6rO167Cc7IOJ367aE7ZWg.jpg'
              )
            }
          />
          <StyledMiniImg
            src="https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_67Kg7Iqk7Yq466qo64247IKs7KeE.jpg"
            alt=""
            onMouseEnter={() =>
              setImg(
                'https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_67Kg7Iqk7Yq466qo64247IKs7KeE.jpg',
                'https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_1month_7IOB7IS42.jpg'
              )
            }
          />
          <StyledMiniImg
            src="https://lenssis.jp/data/item/8729694823/1bfe6ae9eedef.jpg"
            alt=""
            onMouseEnter={() =>
              setImg(
                'https://lenssis.jp/data/item/8729694823/1bfe6ae9eedef.jpg',
                'https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_1month_7IOB7IS42.jpg'
              )
            }
          />
        </MiniPicture>
      </Picture>
    </Container>
  );
}

export default WrapImages;

const Container = styled.div`
  width: 30%;
  height: 900px;
  float: left;
`;

const Picture = styled.div`
  width: 600px;
  height: 800px;
  text-align: center;
`;
const MiniPicture = styled.div`
  width: 600px;
  height: auto;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
const StyledLensImg = styled.img`
  width: 550px;
  height: 550px;
`;
const StyledMiniImg = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border: 1px solid black;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;
