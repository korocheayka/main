import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import styles from './instructors.module.css'
const InstructorsPage = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.swiper__slide}>
          <img
            src="https://one-m.s3.ap-northeast-2.amazonaws.com/choreographer-resources/full-body-picture/2-Instructor+List-Renan.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/16469915079513464f8cc-d707-4511-9fae-316241c32a3f.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://one-m.s3.ap-northeast-2.amazonaws.com/choreographer-resources/full-body-picture/2-Instructor+List-Sieun+Lee.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/1644929459209228dbb83-31cd-4b7b-aff5-c978a14dbd2a.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/1644993969760228dbb83-31cd-4b7b-aff5-c978a14dbd2a.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/16469917030313464f8cc-d707-4511-9fae-316241c32a3f.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/1652180553693933ab8a4-89e7-4849-954e-3c5498db3227.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://one-m.s3.ap-northeast-2.amazonaws.com/choreographer-resources/full-body-picture/2-Instructor+List-Hyewon.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/1652180502494933ab8a4-89e7-4849-954e-3c5498db3227.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://one-m.s3.ap-northeast-2.amazonaws.com/choreographer-resources/full-body-picture/2-Instructor+List-Dokteuk+Crew.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default InstructorsPage;
