import React from 'react';
import styled from 'styled-components';

const H1Tag = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const H2Tag = styled.h2`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const EventDiv = styled.div`
  background-color: #f1faff;
`;
function Event() {
  return (
    <EventDiv>
      <H1Tag>Event</H1Tag>
      <H2Tag>イベント</H2Tag>
      <p>슬라이드</p>
    </EventDiv>
  );
}

export default Event;
