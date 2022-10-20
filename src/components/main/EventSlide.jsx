import React, { useState, useEffect, useRef } from 'react';
import Slide from './Slide';
import styled from 'styled-components';
import event1 from '../../static/img/event1.png';
import event2 from '../../static/img/event2.png';
import event3 from '../../static/img/event3.png';

const TOTAL_SLIDES = 1;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide Img={event1} />
        <Slide Img={event2} />
        <Slide Img={event3} />
      </SliderContainer>
      <ButtonDiv>
        <Button onClick={prevSlide}>Previous Slide</Button>
        <Button onClick={nextSlide}>Next Slide</Button>
        {currentSlide}
      </ButtonDiv>
    </Container>
  );
}

//임시로 만들어 놓은 것 수정 예정!
const Container = styled.div`
  width:584px
  height: 248px;
  overflow: hidden;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  border: 1px solid gray;
  color: gray;
`;
const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
