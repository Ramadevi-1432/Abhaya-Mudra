import React, { useState } from "react";
import { AiOutlineLike, AiOutlineShareAlt, AiOutlineEye } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import "../App.css";
import "../index.css";

const Sidebar = ({ show }) => {
  const [showDescription, setShowDescription] = useState(false);
  const description = `Maitreya, the future Budha to be, resides in the Tushita heaven as a
  bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the
  eighth Buddha, a successor of the seven historical Buddhas
  (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Budha will
  be born in ketumati, in present-day Varanasi, Uttar Pradesh. As a
  bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets,
  necklaces, and an amulet.The`;
  return (
    <div className={show ? "sidebar active" : "sidebar"}>
      <div className="p-6 mt-1 sm:w-[30vw]">
        <div>
          <MdOutlineKeyboardArrowLeft
            size={35}
            className="text-red-300 bg-gray-200 rounded-full my-6"
          />
        </div>
        <h1 className="text-lg sm:text-3xl head">
          MAITREYA BUDDHA IN GESTURE OF FEARLESS (ABHAYA MUDRA)
        </h1>
        <div className="flex sm:mt-[2vw] sm:mb-[1.8vw] mt-2 mb-2">
          <div className="flex flex-col pr-[2vw] pt-2">
            <div>
              <AiOutlineLike
                className="bg-gray-200 rounded-full p-3 sm:p-2"
                size={40}
              />
            </div>
            <p className="text-center text-xs sm:text-sm">0</p>
          </div>
          <div className="flex flex-col pr-[2vw] pt-2">
            <AiOutlineShareAlt
              className="bg-gray-200 rounded-full p-3 sm:p-2"
              size={40}
            />
            <p className="text-center text-xs sm:text-sm">120</p>
          </div>
          <div className="flex flex-col pr-[2vw] pt-2">
            <AiOutlineEye
              className="bg-gray-200 rounded-full p-3 sm:p-2"
              size={40}
            />
            <p className="text-center text-xs sm:text-sm">27</p>
          </div>
        </div>
        <div className="text-gray-400 text">
          <p>Dynasty: Ahichchhatra</p>
          <p>Period: 200 CE</p>
          <p>Material: Sandstone</p>
          <p>Location: National Museum</p>
        </div>
        <h1 className="desc-head">Description :</h1>

        <p className="desc text-gray-400  ">
          {showDescription ? description : description.slice(0, 200)}
        </p>
        <div
          className="flex items-center mt-[1vw] text-red-800 cursor-pointer"
          onClick={() => setShowDescription((bool) => !bool)}
        >
          <BsArrowRightShort className="mt-1" />
          {showDescription ? (
            <span className="button-text ml-1">Read Less</span>
          ) : (
            <span className="button-text ml-1">Read More</span>
          )}
        </div>
        <div className="flex mt-2">
          <button
            className="text-white bg-orange-900 text-xs font-bold px-2 py-1 rounded-lg mr-2"
            type="button"
          >
            ADD TO COLLECTIONS
          </button>
          <button
            className="text-orange-900 bg-white border border-orange-900 px-2 font-bold py-2 rounded-lg text-xs"
            type="button"
          >
            SOUVENIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
