import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import itemdetailslide1 from '../../static/img/itemdetailslide1.png';
import itemdetailslide2 from '../../static/img/itemdetailslide2.png';
import itemdetailslide3 from '../../static/img/itemdetailslide3.png';
import itemdetailslide4 from '../../static/img/itemdetailslide4.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Wrapslide({ handleClick }) {
  return (
    <Container>
      <Pdiv>
        <span className="aboutproduct">관련상품</span>
      </Pdiv>
      <br />
      <hr
        style={{
          width: '55%',
          textAlign: 'right',
          marginBottom: '50px',
        }}
      ></hr>
      <Swiper
        slidesPerView={4}
        spaceBetween={100}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide onClick={handleClick}>
          <SlideLensImg img src={itemdetailslide1} alt="1번쨰"></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick}>
          <SlideLensImg img src={itemdetailslide2} alt="2번쨰"></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick}>
          <SlideLensImg img src={itemdetailslide3} alt="3번쨰"></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick}>
          <SlideLensImg img src={itemdetailslide4} alt="4번쨰"></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick}>
          <SlideLensImg
            src="https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_67Kg7Iqk7Yq466qo64247IKs7KeE.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick}>
          <SlideLensImg
            src="https://lenssis.jp/data/item/1660696120/4YSJ4YWz4YSG4YWu4YSD4YW14YSA4YWz4YSF4YWm4YSL4YW1_4YSH4YWm4YSJ4YWz4YSQ4YWz4YSG4YWp4YSD4YWm4Yav4YSJ4YWh4YSM4YW14Yar.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick}>
          <SlideLensImg
            src="https://lenssis.jp/data/item/1650959574/7L2U7KeA6re466CI7J20_66qo64247Lu3.jpg"
            alt=""
          ></SlideLensImg>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Wrapslide;

const Container = styled.div`
  width: 100%;
  height: 450px;
  text-align: center;
  .mySwiper {
    width: 80%;
    cursor: pointer;
  }
`;

const SlideLensImg = styled.img`
  width: 250px;
  height: 250px;
`;

const Pdiv = styled.div`
  width: 33%;
  height: 400px;
  float: left;
  text-align: right;

  .aboutproduct {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.016em;
    color: #171717;
    padding-right: 30px;
  }
`;
