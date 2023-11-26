import React, { useState } from "react";
import Icon from "../Images/icon-x.svg";

function Login({ active, setActive }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className=" but max-[375px]:h-[60px]   max-[375px]:w-64 max-[375px]: text-center  max-md:ml-[-14rem] rounded-[10px] text-white font-normal text-xl ">
        <button
          onClick={toggleModal}
          className="text-white text-[16px] flex items-center justify-center border-collapse  font-medium font-[ IBM Plex Sans]  w-[90px] h-[50px]  btn"
        >
          Login
        </button>
      </div>

      {modal && (
        <div className="modal z-10 ">
          <div className="ovelay"></div>
          <form>
            <div className="modal-container ">
              <button className="close-modal" onClick={toggleModal}>
                <img src={Icon} alt="" />
              </button>
              <h2 className="text-center text-[#5A5A5A] text-[35px] font-semibold">
                Login
              </h2>
              <div className="flex-col flex gap-4 justify-center items-center">
                <label htmlFor="">
                  <input
                    className="w-[350px] p-3 h-[56px] text-black rounded-[20px] bg-[#F6F6F6]"
                    type="text"
                    placeholder="Email"
                  />
                </label>
                <label htmlFor="number">
                  <input
                    className="w-[350px] p-3 h-[56px] text-black rounded-[20px] bg-[#F6F6F6]"
                    type="password"
                    placeholder="Password"
                  />
                </label>

                <div className="flex gap-3">
                  <input
                    className="bg-[#F6F6F6] mt-[1rem]"
                    type="checkbox"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <div className="btn-modal btn rounded-[35px] text-center w-[270px] h-[50px] flex justify-center items-center text-white text-xl font-normal">
                    <button className="text-[#5A5A5A]  ml-[4rem]  border-collapse text-[30px] font-semibold font-[ IBM Plex Sans]  w-[90px] h-[50px]  btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
