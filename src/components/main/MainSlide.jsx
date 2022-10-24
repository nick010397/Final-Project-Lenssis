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
    width: 100%;
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
