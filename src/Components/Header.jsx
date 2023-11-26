import React from "react";

function Header() {
  return (
    <div>
      <div className=" bg-[#EEE] mx-auto max-w-[120rem]      py-10  flex justify-center   items-center student  ">
        <div className="w-[700px] ml-[-30rem]    ">
          <h1 className="text-[56px] text-[#001035] text-center font-[ IBM Plex Sans] font-medium">
            Insert awesome title here
          </h1>
          <p className="w-[800px]  text-center text-[#001035] text-[16px] font-[ IBM Plex Sans] font-normal  ">
            Section intro. Nulla vitae elit libero, a pharetra augue. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. <br /> Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Cum sociis natoque
            penatibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
