import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Wrapslide() {
  return (
    <Container>
      <P>관련상품</P>
      <hr
        style={{
          width: '50%',
          textAlign: 'center',
          marginBottom: '50px',
        }}
      ></hr>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: '30%' }}>
          <SlideLensImg
            src="https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_67Kg7Iqk7Yq466qo64247IKs7KeE.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide>
          <SlideLensImg
            src="https://lenssis.jp/data/item/9253494019/67Kg7Yuw67Kg7J207KeA_66qo64247Lu3.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide>
          <SlideLensImg
            src="https://lenssis.jp/data/item/1650959574/7L2U7KeA6re466CI7J20_66qo64247Lu3.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide>
          <SlideLensImg
            src="https://lenssis.jp/data/item/1650959574/7L2U7KeA6re466CI7J20_66qo64247Lu3.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide>
          <SlideLensImg
            src="https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_67Kg7Iqk7Yq466qo64247IKs7KeE.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide>
          <SlideLensImg
            src="https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_67Kg7Iqk7Yq466qo64247IKs7KeE.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide>
          <SlideLensImg
            src="https://lenssis.jp/data/item/1650959574/7L2U7KeA6re466CI7J20_66qo64247Lu3.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide>
          <SlideLensImg
            src="https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_67Kg7Iqk7Yq466qo64247IKs7KeE.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide>
          <SlideLensImg
            src="https://lenssis.jp/data/item/1650959574/7L2U7KeA6re466CI7J20_66qo64247Lu3.jpg"
            alt="https://lenssis.jp/data/item/1650959574/7L2U7KeA6re466CI7J20_66qo64247Lu3.jpg"
          ></SlideLensImg>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Wrapslide;

const Container = styled.div`
  width: 100%;
  height: 400px;
  text-align: center;
`;

const SlideLensImg = styled.img`
  width: 250px;
  height: 250px;
`;

const P = styled.div`
  width: 10%;
  height: 400px
  float: center;
  
`;
