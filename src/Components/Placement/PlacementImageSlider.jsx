// import React, { Fragment } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { slides } from "../Slides/PlacementSlides";
// import "./PlacementSlides.css";

// import {  EffectCreative,Navigation, Autoplay } from "swiper/modules";

// const PlacementImageSlider = () => {
//   return (
//     <div className="mt-20">
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         speed={2000}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 30,
//           depth: 0,
//           modifier: 0,
//         }}
//         autoplay={{
//           delay: 100,
//           disableOnInteraction: false,
//         }}
//         // spaceBetween={} 
//         modules={[ EffectCreative,Navigation, Autoplay]}
//         className="!z-0"
//       >
//         {slides.map((slide, index) => (
//           <Fragment key={index}>
//             <SwiperSlide
//               className="flex flex-col rounded-xl gap-4 justify-center text-center  transition-transform duration-500"
//             >
//               <img
//                 src={slide.imageUrl}
//                 alt="slide_image"
//                 className={`rounded-2xl ${
//                   index === 3 ? "w-[400px]" : "w-[200px]" // Double width for the middle image (active)
//                 }`}
//               />
//               {/* <h1 className="text-[16px] font-medium">{slide.name}</h1> */}
//             </SwiperSlide>
//           </Fragment>
//         ))}
//       </Swiper>
//       <style>
//         {`
//           .swiper-slide-active {
//             transform: scale(1.2) !important;
//             transition: transform 0.5s ease-in-out;
//           }

//           .swiper-slide-active img {
//             width: 460px !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default PlacementImageSlider;

import React, { useRef,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { slides } from "../../Slides/PlacementSlides";
import "./PlacementSlides.css";

const PlacementImageSlider = () => {
  const swipperWrapperRef = useRef(null);

  return (
    <mian>
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={"auto"}
          initialSlide={5}
          // loopAdditionalSlides={}
          centeredSlides={true}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        
          onSlideChange={(swiper) => {
            const activeSlide = swiper.slides[swiper.activeIndex];
            gsap.fromTo(
              activeSlide,
              { scale: 0 },
              { scale: 1, duration: 0.2, ease: "elastic" }
            );
          }}
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.imageUrl} alt={image.name} />
              <p>{image.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </mian>
  );
};

export default PlacementImageSlider;


// import React from "react";
// import { motion } from "framer-motion";
// // import { slides } from "../Slides/PlacementSlides";
// const slides=[
//   "/Images/DSC03468 3.png",
//   "/Images/DSC03471 2.png",
//   "/Images/DSC03471 4.png",
//   "/Images/DSC03488 3.png",
//   "/Images/DSC03493 1.png"
// ]


// const PlacementImageSlider = () => {
//   return (
//     <div className="flex w-full h-40 items-center justify-center gap-2 overflow-hidden">
//       {slides.map((imageUrl, index) => (
//         <div
//           key={index}
//           className={`relative h-full ${
//             index === Math.floor(slides.length / 2) ? "w-2/12" : "w-1/12"
//           } bg-gray-100 overflow-hidden`}
//         >
//           <motion.div
//             className="absolute h-full w-full"
//             initial={{ x: "100%" }}
//             animate={{ x: "-100%" }}
//             transition={{
//               repeat: Infinity,
//               duration: 6, // Adjust the speed of the image transition
//               ease: "linear",
//               delay: index * 1.5, // Adds staggered delay for each image
//             }}
//           >
//             <img
//               src={imageUrl}
//               alt={`carousel-${index}`}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlacementImageSlider;


