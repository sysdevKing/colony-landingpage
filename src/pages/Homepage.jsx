import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Rightbar from '../components/Rightbar/Rightbar'
import Hero from '../components/landingpage/Hero'
import Media from '../components/landingpage/Media'

// import Gameplay from '../components/landingpage/Gameplay'
// import Globe from '../components/globe/Globecomponent'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <Rightbar />
        </div>
          <Hero />
          <Media />
          {/* <Globe /> */}
      </div>
    </div>
  )
}

export default Homepage

// // src/components/SwiperCarousel.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/swiper-bundle.css';

// const SwiperCarousel = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       className="w-full h-full"
//     >
//       <SwiperSlide>
//         <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-3xl">
//           Slide 1
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="w-full h-full flex items-center justify-center bg-red-500 text-white text-3xl">
//           Slide 2
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="w-full h-full flex items-center justify-center bg-green-500 text-white text-3xl">
//           Slide 3
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="w-full h-full flex items-center justify-center bg-yellow-500 text-white text-3xl">
//           Slide 4
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default SwiperCarousel;
