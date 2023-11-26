import { useState } from "react";
import iocn from "../Images/Icon.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "../Images/image.png";
import Icon from "../Images/Iconn.svg";
import Icon1 from "../Images/Icon1.png";
import View from "../Images/View.svg";
import Kalendar from "../Images/Calendar.svg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Video from "../Images/Video.png";

function Main() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className=" mx-auto max-w-[120rem] py-24 p-12 ">
      <div className="relative  ">
        <div className="absolute  ">
          <img className="p-2" src={iocn} alt="" />
        </div>
        <form className=" ">
          <input
            className="pl-10 h-[30px] w-[200px]"
            type="text"
            placeholder="Search..."
          />

          <h1 className="text-[48px] text-[#001035] mt-[-3rem]  flex justify-center items-center  font-medium text-center">
            Biz haqimizda
          </h1>
        </form>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <div className=" flex  justify-center items-center">
          <div className="flex gap-10 items-center justify-end ml-[18rem]">
            <img src={Icon1} className="w-[300px] h-[260px]" alt="" />

            <div className=" mt-[-2rem]">
              <h1 className="text-[#001035]   text-[48px] mt-5 font-medium">
                Insert awesome title here
              </h1>
              <p className="w-[580px] h-[90px]  ">
                Section intro. Nulla vitae elit libero, a pharetra augue. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Cum sociis
                natoque penatibus.
              </p>
              <ul className="mt-4 pl-4 ">
                <li>
                  Section intro. Nulla vitae elit libero, a pharetra augue.
                </li>
                <li>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                </li>
                <li>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </li>
                <li>Cum sociis natoque penatibus.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="mt-20">
          <div className="flex  gap-4  mt-4">
            <img src={Icon} alt="" />
            <a
              className=" text-[#001035] text-[16px] font-semibold  fon-[IBM Plex Sans] flex justify-center items-center "
              href=""
            >
              {" "}
              Biz haqimizda
            </a>
          </div>
          <div className="flex  gap-4 mt-4">
            <img src={Icon} alt="" />
            <a
              className=" text-[#001035] text-[16px] font-semibold  fon-[IBM Plex Sans] flex justify-center items-center "
              href=""
            >
              E’lonlar
            </a>
          </div>
          <div className="flex  gap-4 mt-4">
            <img src={Icon} alt="" />
            <a
              className=" text-[#001035] text-[16px] font-semibold  fon-[IBM Plex Sans] flex gap-4 justify-center items-center "
              href=""
            >
              {" "}
              Maktab hayotidan lavhalar
            </a>
          </div>
          <div className="flex  gap-4 mt-4">
            <img src={Icon} alt="" />
            <a
              className=" text-[#001035] text-[16px] font-semibold  fon-[IBM Plex Sans] flex justify-center items-center "
              href=""
            >
              {" "}
              Galareya
            </a>
          </div>
          <div className="flex  gap-4 mt-4">
            <img src={Icon} alt="" />
            <a
              className=" text-[#001035] text-[16px] font-semibold  fon-[IBM Plex Sans] flex justify-center items-center "
              href=""
            >
              {" "}
              Bog’lanish uchun
            </a>
          </div>
        </div>

        <div className=" ml-16  ">
          <h1 className="text-[#001035] text-[40px] mt-20 font-medium">
            Insert awesome title here
          </h1>
          <p className="w-[580px] h-[90px]  ">
            Section intro. Nulla vitae elit libero, a pharetra augue. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Cum sociis natoque penatibus.
          </p>
          <ul className="mt-4 pl-4 list">
            <li>Section intro. Nulla vitae elit libero, a pharetra augue.</li>
            <li>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            </li>
            <li>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut <br /> fermentum massa justo sit amet risus.
            </li>
            <li>Cum sociis natoque penatibus.</li>
          </ul>
        </div>
        <img className=" ml-10 mt-28 w-[300px] h-[250px]" src={Image} alt="" />
      </div>
      <div className="">
        <h1 className="text-[48px] text-[#001035] text-center py-20 font-medium font-[ IBM Plex Sans]">
          E’lonlar
        </h1>
        <div className=" grid  ml-[15rem] grid-cols-3">
          <div>
            <img className="w-[300px]" src={Icon1} alt="" />
            <p className="text-[#001035] text-[24px] font-medium  font-[IBM Plex Sans]">
              Nomi
            </p>
            <p className="text-[#001035] text-[16px] font-normal  font-[IBM Plex Sans]">
              Short description of the article. Nullam <br /> id dolor id nibh{" "}
              ultricies vehicula ut id elit. <br /> Cras justo odio, dapibus ac
              facilisis in, <br /> egestas eget quam.
            </p>
            <div className="flex ml-10 mt-5 gap-5">
              <div className="flex gap-2">
                <img src={View} alt="" />
                <p>123</p>
              </div>
              <div className="flex gap-2">
                <img src={Kalendar} alt="" />
                <p>01.01.2002</p>
              </div>
              <button className="bg-[#002B6C] text-white p-[3px]  text-[14px] rounded-[8px]  items-center">
                BATAFSIL
              </button>
            </div>
          </div>
          <div>
            <img className="w-[300px]" src={Icon1} alt="" />
            <p className="text-[#001035] text-[24px] font-medium  font-[IBM Plex Sans]">
              Nomi
            </p>
            <p className="text-[#001035] text-[16px] font-normal  font-[IBM Plex Sans]">
              Short description of the article. Nullam <br /> id dolor id nibh{" "}
              ultricies vehicula ut id elit. <br /> Cras justo odio, dapibus ac
              facilisis in, <br /> egestas eget quam.
            </p>
            <div className="flex ml-10 mt-5 gap-5">
              <div className="flex gap-2">
                <img src={View} alt="" />
                <p>123</p>
              </div>
              <div className="flex gap-2">
                <img src={Kalendar} alt="" />
                <p>01.01.2002</p>
              </div>
              <button className="bg-[#002B6C] text-white p-[3px]  text-[14px] rounded-[8px]  items-center">
                BATAFSIL
              </button>
            </div>
          </div>
          <div>
            <img className="w-[300px]" src={Icon1} alt="" />
            <p className="text-[#001035] text-[24px] font-medium  font-[IBM Plex Sans]">
              Nomi
            </p>
            <p className="text-[#001035] text-[16px] font-normal  font-[IBM Plex Sans]">
              Short description of the article. Nullam <br /> id dolor id nibh{" "}
              ultricies vehicula ut id elit. <br /> Cras justo odio, dapibus ac
              facilisis in, <br /> egestas eget quam.
            </p>
            <div className="flex ml-10 mt-5 gap-5">
              <div className="flex gap-2">
                <img src={View} alt="" />
                <p>123</p>
              </div>
              <div className="flex gap-2">
                <img src={Kalendar} alt="" />
                <p>01.01.2002</p>
              </div>
              <button className="bg-[#002B6C] text-white p-[3px]  text-[14px] rounded-[8px]  items-center">
                BATAFSIL
              </button>
            </div>
          </div>
          <div className="mt-20">
            <img className="w-[300px]" src={Icon1} alt="" />
            <p className="text-[#001035] text-[24px] font-medium  font-[IBM Plex Sans]">
              Nomi
            </p>
            <p className="text-[#001035] text-[16px] font-normal  font-[IBM Plex Sans]">
              Short description of the article. Nullam <br /> id dolor id nibh{" "}
              ultricies vehicula ut id elit. <br /> Cras justo odio, dapibus ac
              facilisis in, <br /> egestas eget quam.
            </p>
            <div className="flex ml-10 mt-5 gap-5">
              <div className="flex gap-2">
                <img src={View} alt="" />
                <p>123</p>
              </div>
              <div className="flex gap-2">
                <img src={Kalendar} alt="" />
                <p>01.01.2002</p>
              </div>
              <button className="bg-[#002B6C] text-white p-[3px]  text-[14px] rounded-[8px]  items-center">
                BATAFSIL
              </button>
            </div>
          </div>
          <div className="mt-20">
            <img className="w-[300px]" src={Icon1} alt="" />
            <p className="text-[#001035] text-[24px] font-medium  font-[IBM Plex Sans]">
              Nomi
            </p>
            <p className="text-[#001035] text-[16px] font-normal  font-[IBM Plex Sans]">
              Short description of the article. Nullam <br /> id dolor id nibh{" "}
              ultricies vehicula ut id elit. <br /> Cras justo odio, dapibus ac
              facilisis in, <br /> egestas eget quam.
            </p>
            <div className="flex ml-10 mt-5 gap-5">
              <div className="flex gap-2">
                <img src={View} alt="" />
                <p>123</p>
              </div>
              <div className="flex gap-2">
                <img src={Kalendar} alt="" />
                <p>01.01.2002</p>
              </div>
              <button className="bg-[#002B6C] text-white p-[3px]  text-[14px] rounded-[8px]  items-center">
                BATAFSIL
              </button>
            </div>
          </div>
          <div className="mt-20">
            <img className="w-[300px]" src={Icon1} alt="" />
            <p className="text-[#001035] text-[24px] font-medium  font-[IBM Plex Sans]">
              Nomi
            </p>
            <p className="text-[#001035] text-[16px] font-normal  font-[IBM Plex Sans]">
              Short description of the article. Nullam <br /> id dolor id nibh{" "}
              ultricies vehicula ut id elit. <br /> Cras justo odio, dapibus ac
              facilisis in, <br /> egestas eget quam.
            </p>
            <div className="flex ml-10 mt-5 gap-5">
              <div className="flex gap-2">
                <img src={View} alt="" />
                <p>123</p>
              </div>
              <div className="flex gap-2">
                <img src={Kalendar} alt="" />
                <p>01.01.2002</p>
              </div>
              <button className="bg-[#002B6C] text-white p-[3px]  text-[14px] rounded-[8px]  items-center">
                BATAFSIL
              </button>
            </div>
          </div>
        </div>
        <Stack
          className=" flex justify-between items-center ml-[10rem]  mt-10"
          spacing={2}
        >
          <Pagination count={12} variant="outlined" shape="rounded" />
        </Stack>
      </div>
      <div>
        <h1 className="text-[48px] text-[#001035] text-center py-20 font-medium font-[ IBM Plex Sans]">
          Maktab hayotidan lavhalar
        </h1>
      </div>
    </div>
  );
}

export default Main;
