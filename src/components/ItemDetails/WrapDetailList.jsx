import React from 'react';
import styled from 'styled-components';

function WrapDetailList({ fre, item, countList }) {
  console.log(fre);

  return (
    <Container>
      {countList &&
        countList.map((it, i) => (
          <div key={i}>
            <div>
              {fre.map((f) => (
                <>
                  <ListDiv>
                    <SpanDiv>빈도:{f}</SpanDiv>
                    <BtnDiv>
                      <button type="button">X</button>
                    </BtnDiv>
                  </ListDiv>
                </>
              ))}
            </div>
          </div>
        ))}
    </Container>
  );
}

export default WrapDetailList;

const Container = styled.div`
  width: 30%;
  height: 30%;
`;
const ListDiv = styled.div`
  display: border-box;
  border: 1px solid black;
  width: 557px;
  height: 78px;
  left: -0.04px;
  margin-top: 30px;

  background: #f9f9f9;
  border: 0.4px solid #c5c5c5;
  border-radius: 4px;
`;
const BtnDiv = styled.div`
  float: right;
  width: 50%;
  text-align: right;
  button {
    cursor: pointer;
  }
`;
const SpanDiv = styled.div`
  width: 50%;
  float: left;
  font-weight: 700;
  text-align: left;
  margin-top: 30px;
`;
