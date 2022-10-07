import React, { useState, useEffect, useRef } from 'react'
import Slide from './Slide'
import styled from 'styled-components'
import Banner_main from '../../asset/Banner_main.jpg'
import Banner_main2 from '../../asset/banner_main_2.jpg'

const Container = styled.div`
  width: 60%;
  overflow: hidden;
`
const Button = styled.button`
  all: unset;
  border: 1px solid gray;
  padding: 0.5em 2em;
  color: gray;
  border-radius: 10px;
`
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`

const TOTAL_SLIDES = 1
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out'
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`
  }, [currentSlide])
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide img={Banner_main} />
        <Slide img={Banner_main2} />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
      {currentSlide}
    </Container>
  )
}
