import React from 'react';
import styled from 'styled-components';
import TitleName from './TitleName';
import EventSlide from './EventSlide';
function Event() {
  return (
    <>
      <EventDiv>
        <TitleName event title="Event" subtitle="イベント" />
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

const EventsLIDEDiv = styled.div`
  height: 520px;
  background: #f1faff;
  border-top: 1px solid;
  margin-bottom: 140px;
`;

export default Event;
