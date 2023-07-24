
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';





 
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
          type: 'fraction', 
        }} 
        navigation={true} 
        modules={[Pagination, Navigation]} 
        className="mySwiper" 
      > 
        <SwiperSlide><img src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/16734235512616d6cc343-c597-4359-8761-641cb43b4b51.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/16734237004626d6cc343-c597-4359-8761-641cb43b4b51.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide> <img src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/16734181525196d6cc343-c597-4359-8761-641cb43b4b51.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/1644929459209228dbb83-31cd-4b7b-aff5-c978a14dbd2a.png" alt="" /></SwiperSlide> 
        <SwiperSlide> <img src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/1644993969760228dbb83-31cd-4b7b-aff5-c978a14dbd2a.png" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/full-body-picture/16469917030313464f8cc-d707-4511-9fae-316241c32a3f.png" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="" alt="" /></SwiperSlide> 
        <SwiperSlide> <img src="" alt="" /></SwiperSlide> 
        <SwiperSlide> <img src="" alt="" /></SwiperSlide> 
        <SwiperSlide></SwiperSlide> 
        <SwiperSlide><img src="" alt="" /></SwiperSlide> 
      </Swiper> 
 
     
    </> 
  ); 
} 
 
 
 
export default InstructorsPage;