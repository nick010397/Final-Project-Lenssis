import React from 'react';
import styled from 'styled-components';
import EventSlide from './EventSlide';
function Event() {
  return (
    <>
      <EventDiv>
        <H1Tag>Event</H1Tag>
        <H2Tag>イベント</H2Tag>
      </EventDiv>
      <EventsLIDEDiv>
        <EventSlide />
      </EventsLIDEDiv>
    </>
  );
}

const EventDiv = styled.div`
  background-color: #f1faff;
  height: 280px;
  overflow: hidden;
`;

const H1Tag = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.016em;
  color: #23314a;
  //event
  margin-top: 100px;
  margin-bottom: 8px;
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
  //event
  margin-bottom: 80px;
`;

const EventsLIDEDiv = styled.div`
  height: 520px;
  background: #f1faff;
  border-top: 1px solid;
  margin-bottom: 140px;
`;

export default Event;
