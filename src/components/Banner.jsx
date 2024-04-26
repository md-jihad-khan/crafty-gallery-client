import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <div className="container mx-auto rounded-lg h-[70vh]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero w-full mx-auto rounded-lg h-[70vh] object-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1517133741870-7b4e3de342d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="hero-overlay rounded-lg bg-gradient-to-t from-gray-900  to-transparent opacity-80"></div>
            <div className={"hero-content text-center text-white "}>
              <div className="lg:w-1/2">
                <h1 className="mb-5  text-5xl font-bold text-teal-500 font-rancho">
                  Discover Timeless Craftsmanship
                </h1>
                <p className="mb-5 text-sm text-gray-300 font-poppins">
                  Explore our exquisite collection of handcrafted ceramics and
                  pottery, where every piece tells a story of tradition,
                  artistry, and elegance. Elevate your space with our unique
                  creations, meticulously crafted by skilled artisans. Find the
                  perfect blend of beauty and functionality for your home.
                </p>
                <button className="btn cursor-pointer text-white font-rancho bg-transparent border border-teal-500 font-thin">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero w-full mx-auto rounded-lg h-[70vh] object-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="hero-overlay rounded-lg bg-gradient-to-t from-gray-900  to-transparent opacity-80"></div>
            <div className={"hero-content text-center text-white "}>
              <div className="lg:w-1/2">
                <h1 className="mb-5 text-5xl font-bold text-teal-500 font-rancho">
                  Discover Timeless Craftsmanship
                </h1>
                <p className="mb-5 text-sm text-gray-300 font-poppins">
                  Explore our exquisite collection of handcrafted ceramics and
                  pottery, where every piece tells a story of tradition,
                  artistry, and elegance. Elevate your space with our unique
                  creations, meticulously crafted by skilled artisans. Find the
                  perfect blend of beauty and functionality for your home.
                </p>{" "}
                <button className="btn cursor-pointer text-white font-rancho bg-transparent border border-teal-500 font-thin">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero w-full mx-auto rounded-lg h-[70vh] object-cover"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/3094036/pexels-photo-3094036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="hero-overlay rounded-lg bg-gradient-to-t from-gray-900  to-transparent opacity-80"></div>
            <div className={"hero-content text-center text-white "}>
              <div className="lg:w-1/2">
                <h1 className="mb-5 text-5xl font-bold text-teal-500 font-rancho">
                  Discover Timeless Craftsmanship
                </h1>
                <p className="mb-5 text-sm text-gray-300 font-poppins">
                  Explore our exquisite collection of handcrafted ceramics and
                  pottery, where every piece tells a story of tradition,
                  artistry, and elegance. Elevate your space with our unique
                  creations, meticulously crafted by skilled artisans. Find the
                  perfect blend of beauty and functionality for your home.
                </p>{" "}
                <button className="btn cursor-pointer text-white font-rancho bg-transparent border border-teal-500 font-thin">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
