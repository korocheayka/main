import React from 'react' 
import styles from './homepage.module.css' 
import { Link } from 'react-router-dom' 
import  { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './styles.css';
// import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'
import { Pagination } from 'swiper/modules'
 
const HomePage = () => { 
  return ( 
    <> 
      <section className={styles.video__section}> 
        <div className={styles.video__container}> 
          <video autoPlay loop muted className={styles.video__background}> 
            <source src="/video/ilikeit.mp4" type="video/mp4" /> 
          </video> 
        </div> 
      </section> 
 
      <section className={styles.words__section}> 
        <div className={styles.container}> 
          <div className={styles.words__wrapper}> 
            <div className={styles.words__up}> 
              <h2>WE DONT NEED </h2> 
            </div> 
            <div className={styles.words__btw}> 
              <h1>A STAGE TO DANCE</h1> 
            </div> 
            <div className={styles.words__down}> 
              <Link to="/about">More about us</Link> 
            </div> 
          </div> 
        </div> 
      </section> 
      <div className='text-wrapper'>   
     <h2> LATEST VIDEOS</h2> 
      </div> 

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide className='swipe-1'><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/latest-vedios/20210503-JJ-MONTERE.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/latest-vedios/20210602-YOUNGBEEN+JOO-WATERFALL.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/latest-vedios/20210518-HAEJUN-WHERE+HAVE+YOU+BEEN+REMIX.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/20210514-HYOJIN+X+MAAIN-UP+(JK+REMIX).jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/latest-vedios/20210512-WOONHA-STREETS.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWfwV8vkIXvI&psig=AOvVaw2EvIVfk9Lae0X2-MbjMs1E&ust=1690276692568000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCKD4oLmDp4ADFQAAAAAdAAAAABAI" alt="" /></SwiperSlide> 
        
      </Swiper>

      {/* <Swiper 
        slidesPerView={'auto'} 
        spaceBetween={30} 
        pagination={{ 
          clickable: true, 
        }} 
        modules={[Pagination]} 
        className="mySwiper" 
      > 
        <SwiperSlide className='swipe-1'><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/latest-vedios/20210503-JJ-MONTERE.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/latest-vedios/20210602-YOUNGBEEN+JOO-WATERFALL.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/latest-vedios/20210518-HAEJUN-WHERE+HAVE+YOU+BEEN+REMIX.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/20210514-HYOJIN+X+MAAIN-UP+(JK+REMIX).jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://one-m.s3.ap-northeast-2.amazonaws.com/etc/studio-renewal/latest-vedios/20210512-WOONHA-STREETS.jpg" alt="" /></SwiperSlide> 
        <SwiperSlide><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWfwV8vkIXvI&psig=AOvVaw2EvIVfk9Lae0X2-MbjMs1E&ust=1690276692568000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCKD4oLmDp4ADFQAAAAAdAAAAABAI" alt="" /></SwiperSlide> 
        
      </Swiper>  */}
      
    </> 
  ) 
} 
 
export default HomePage