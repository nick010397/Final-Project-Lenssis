// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

// import required modules
import { Pagination } from 'swiper';

import MainBanner from './MainBanner';

export default function MainSlide() {
  return (
    <Container>
      <Swiper
        slidesPerView={1.26}
        centeredSlides={true}
        spaceBetween={16}
        loop={true}
        pagination={{
          clickable: true,
        }}
        loopFillGroupWithBlank={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MainBanner />
        </SwiperSlide>
        <SwiperSlide>
          <MainBanner />
        </SwiperSlide>
        <SwiperSlide>
          <MainBanner />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  .mySwiper {
    height: 640px;
  }
  .swiper-pagination-bullet-active {
    background-color: #23314a;
  }
  .swiper-slide {
    opacity: 0.5;
  }
  .swiper-slide-active {
    opacity: 1;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 592px);
`;

const FirstItem = styled.div`
  background-color: tomato;
  &.one {
    height: 592px;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;
const SecondItem = styled.div`
  background-color: skyblue;
  &.two {
    height: 220px;
  }
`;
const ThirdItem = styled.div`
  background-color: green;
  &.three {
    grid-row-start: 2;
    height: 356px;
  }
`;
