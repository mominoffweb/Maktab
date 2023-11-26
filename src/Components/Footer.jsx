import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import footer_img from "../Images/Footer-imge.png";
import galereya from "../Images/icon-images.png";
import Video from "../Images/Video.png";
import icon from "../Images/Right-iocn.svg";
import Facebook from "../Images/Facebook.svg";
import Twitter from "../Images/Twitter.svg";
import Instagram from "../Images/Instagram.svg";
import Youtobe from "../Images/Youtobe.svg";
import Linkedin from "../Images/Linkedin.svg";
function Footer() {
  return (
    <div className=" mx-auto max-w-[120rem]     my-[-5rem]  ">
      <Swiper
        navigation={true}
        spaceBetween={50}
        modules={[Pagination, EffectCube, Navigation]}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="p-10"
      >
        <SwiperSlide className="ml-[4rem]">
          <div className="w-[300px] h-[450px] bg-[#FFF]  cursor-pointer shadow-xl">
            <img className="ml-3 pt-6 w-[275px] relative" src={Video} alt="" />
            <span className="bg-[#001035] z-50  absolute mt-[-3rem] ml-6 rounded-[8px] p-1  text-white">
              00:00
            </span>
            <p className="p-3 text-[24px] text-[#001035] font-medium ">
              Video title
            </p>
            <p className="p-3 text-[16px] text-[#001035] font-normal">
              Short description. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[450px] bg-[#FFF]  cursor-pointer shadow-xl">
            <img className="ml-3 pt-6 w-[275px] relative" src={Video} alt="" />
            <span className="bg-[#001035] z-50  absolute mt-[-3rem] ml-6 rounded-[8px] p-1  text-white">
              00:00
            </span>
            <p className="p-3 text-[24px] text-[#001035] font-medium ">
              Video title
            </p>
            <p className="p-3 text-[16px] text-[#001035] font-normal">
              Short description. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-[-1rem]">
          <div className="w-[300px] h-[450px] bg-[#FFF]  cursor-pointer shadow-xl">
            <img className="ml-3 pt-6 w-[275px] relative" src={Video} alt="" />
            <span className="bg-[#001035] z-50  absolute mt-[-3rem] ml-6 rounded-[8px] p-1  text-white">
              00:00
            </span>
            <p className="p-3 text-[24px] text-[#001035] font-medium ">
              Video title
            </p>
            <p className="p-3 text-[16px] text-[#001035] font-normal">
              Short description. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-[300px] h-[450px] bg-[#FFF]  cursor-pointer shadow-xl">
            <img className="ml-3 pt-6 w-[275px] relative" src={Video} alt="" />
            <span className="bg-[#001035] z-50  absolute mt-[-3rem] ml-6 rounded-[8px] p-1  text-white">
              00:00
            </span>
            <p className="p-3 text-[24px] text-[#001035] font-medium ">
              Video title
            </p>
            <p className="p-3 text-[16px] text-[#001035] font-normal">
              Short description. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-1rem">
          <div className="w-[300px] h-[450px] bg-[#FFF]  cursor-pointer shadow-xl">
            <img className="ml-3 pt-6 w-[275px] relative" src={Video} alt="" />
            <span className="bg-[#001035] z-50  absolute mt-[-3rem] ml-6 rounded-[8px] p-1  text-white">
              00:00
            </span>
            <p className="p-3 text-[24px] text-[#001035] font-medium ">
              Video title
            </p>
            <p className="p-3 text-[16px] text-[#001035] font-normal">
              Short description. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="p-10">
        <h1 className="text-[48px] text-[#001035] text-center py-20 font-medium font-[ IBM Plex Sans]">
          Galareya
        </h1>
        <div className=" gap-4 ml-[5rem]  grid grid-cols-4">
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
          <img className="w-[270px]" src={galereya} alt="" />
        </div>

        <h1 className="text-[48px] text-[#001035] text-center py-20 font-medium font-[ IBM Plex Sans]">
          <a href="#Bog’lanishuchun">Bog’lanish uchun</a>
        </h1>

        <form className="flex  ml-[4rem] ">
          <img className="w-[650px] ml-20" src={footer_img} alt="" />

          <div className=" w-[550px] h-[500px] p-5  bg-[#F6F7F8]">
            <h1 className="text-[#001035] text-[32px] font-medium  font-[ IBM Plex Sans]">
              Insert awesome title here
            </h1>
            <p className="text-[#001035] pt-8 text-[16px] font-normal">
              Section intro. Nulla vitae elit libero, a pharetra augue. Cras
              justo odio, dapibus ac facilisis in, egestas eget quam.{" "}
            </p>
            <label htmlFor="label">
              <input
                className=" inp w-[400px] pl-3 mt-8 h-[45px] "
                type="name"
                placeholder="Name"
              />
              <input
                type="number"
                className=" inp w-[400px] mt-8 h-[45px] border-spacing-0"
                placeholder="+998 90-123-45-67"
              />
              <textarea
                className="  inp  w-[400px] mt-8 h-[45px] border-spacing-0"
                placeholder="Your text"
                name="text"
              />
              <button className="text-[16px] text-white  bg-[#001035] text-center flex justify-center items-center ml-20 mt-[3rem] font-medium  w-[200px] h-[45px]">
                Send
              </button>
            </label>
          </div>
        </form>
      </div>
      <div className=" ">
        <div className="bg-[#001035] flex gap-64 pl-[5rem] w-[1720px] p-10 h-[400px]">
          <div>
            <h1 className="text-[24px] font-medium text-white">Menu</h1>
            <div className="flex gap-3 mt-5">
              {" "}
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-[24px] font-medium text-white">Menu</h1>
            <div className="flex gap-3 mt-5">
              {" "}
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-[24px] font-medium text-white">Menu</h1>
            <div className="flex gap-3 mt-5">
              {" "}
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
            <div className="flex gap-3 mt-5">
              <a
                className="text-base font-medium text-white  font-[IBM Plex Sans]"
                href="#"
              >
                Link
              </a>
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="w-[350px]  h-[250px] mt-2 ml-[-5rem] bg-[#D9D9D9]">
            <h2 className="text-black text-4xl  mt-[5rem] flex justify-center items-center font-normal">
              XARITA{" "}
            </h2>
          </div>
        </div>
        <div className="footer bg-[#001035] w-[1720px] p-3">
          <div className=" flex  ml-[30rem] gap-10">
            {" "}
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <div className="bg-[#1F2D4D] rounded-[50px] w-[50px] h-[50px]  flex justify-center items-center ">
              <img className="" src={Instagram} alt="" />
            </div>
            <div className="bg-[#1F2D4D] rounded-[50px] w-[50px] h-[50px]  flex justify-center items-center ">
              <img className="" src={Youtobe} alt="" />
            </div>
            <div className="bg-[#1F2D4D] rounded-[50px] w-[50px] h-[50px]  flex justify-center items-center ">
              <img className="" src={Linkedin} alt="" />
            </div>
          </div>
          <p className=""></p>
        </div>
        <p className="bg-[#001035] w-[1720px]  p-10 text-[16px] font-semibold  pl-[35rem]  text-[#999fae] ">
          © Copywrite by Delta group
        </p>
      </div>
    </div>
  );
}

export default Footer;
