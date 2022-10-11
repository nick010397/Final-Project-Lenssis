import React from 'react';
import styled from 'styled-components';

function Slide({ img, Img }) {
  return <div>{img ? <IMG src={img} /> : <Imgg src={Img} />}</div>;
}

const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;

const Imgg = styled.img``;

export default Slide;
