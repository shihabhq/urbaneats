import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../../../../assets/slider-images/chicken.jpeg";

import image2 from "../../../../assets/slider-images/italian.jpg";
import image3 from "../../../../assets/slider-images/curry.jpeg";
import image4 from "../../../../assets/slider-images/newChicks.jpeg";
import image5 from "../../../../assets/slider-images/oats.jpeg";
import image6 from "../../../../assets/slider-images/variety.jpeg";
import homeBanner from "../../../../assets/homebg.jpg";
import ButtonCovered from "../../../../shared/ButtonCovered";

const SlidersContainer = () => {
  return (
    <div className="home-banner relative  min-h-screen flex flex-col lg:flex-row justify-center items-center pt-16 gap-6 bg-cover bg-center">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${homeBanner})`,
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      <div className="basis-2/5 flex my-16 flex-col items-start pl-16 pt-8 gap-4">
        <p className="text-xl text-btncol font-semibold">
          Welcome to UrbanEats!
        </p>
        <h1 className="text-4xl sm:text-6xl w-[80%] font-poppins text-white font-bold">
          Taste & Bake the Best Food You Need!
        </h1>
        <p className="text-white text-lg max-w-lg">
          The UrbanEats is a restaurant management website where you can buy and
          sell foods that you love.
        </p>
        <ButtonCovered name="See All Foods" to="/all-foods" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 basis-1/2">
        <div className="h-[60vh] cursor-grab active:cursor-grabbing">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper h-full">
            <SwiperSlide>
              <img
                src={image1}
                alt="Food 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                alt="Food 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image3}
                alt="Food 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Slider */}
        <div className="h-[60vh] cursor-grab active:cursor-grabbing">
          <Swiper
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop={true}
            className="h-full">
            <SwiperSlide>
              <img
                src={image4}
                alt="Food 4"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image5}
                alt="Food 5"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image6}
                alt="Food 6"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SlidersContainer;
