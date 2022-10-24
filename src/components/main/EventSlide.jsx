// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

// import required modules
import { Pagination } from 'swiper';
import { EventSlideList } from '../../static/img/data/EventSlide';
export default function EventSlide() {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        slidesPerGroup={1}
        // centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {EventSlideList.map((data) => (
          <SwiperStyled key={data.id}>
            <SwiperSlide>
              <EventDiv>
                <img src={data.src} alt="이벤트" />

                <EventTitle>{data.title}</EventTitle>
                <EventContents>{data.contents}</EventContents>
              </EventDiv>
            </SwiperSlide>
          </SwiperStyled>
        ))}
      </Swiper>
    </Container>
  );
}

const SwiperStyled = styled(SwiperSlide)`
  background: white;
  height: 384px;

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 248px;
    object-fit: cover;
  }
`;
const Container = styled.div`
  .mySwiper {
    width: 1200px;
    height: 440px;

    .swiper-pagination-bullet-active {
      background-color: #23314a;
    }
  }
`;
const EventDiv = styled.div`
  object-fit: cover;
`;

const EventTitle = styled.h3`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #23314a;
  margin: 24px 0px 16px 24px;
`;
const EventContents = styled.p`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.016em;
  color: #23314a;
  margin-left: 24px;
  margin-right: 24px;
`;
