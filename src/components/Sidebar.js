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
      <div className="px-4 mt-1 sm:mt-2 sm:w-[30vw]">
        <MdOutlineKeyboardArrowLeft
          size={25}
          className="text-red-600 bg-gray-300 rounded-full mb-3 top-[10px] left-[0px] mt-1"
        />
        <h1 className="text-lg sm:text-3xl font-medium">
          MAITREYA BUDDHA IN GESTURE OF FEARLESS (ABHAYA MUDRA)
        </h1>
        <div className="flex justify-between sm:mt-3 sm:mb-3 mt-2 mb-2">
          <div className="flex flex-col">
            <div>
              <AiOutlineLike
                className="bg-gray-300 rounded-full p-3 sm:p-2"
                size={40}
              />
            </div>
            <p className="text-center text-xs sm:text-sm">0</p>
          </div>
          <div>
            <AiOutlineShareAlt
              className="bg-gray-300 rounded-full p-3 sm:p-2"
              size={40}
            />
            <p className="text-center text-xs sm:text-sm">120</p>
          </div>
          <div>
            <AiOutlineEye
              className="bg-gray-300 rounded-full p-3 sm:p-2"
              size={40}
            />
            <p className="text-center text-xs sm:text-sm">27</p>
          </div>
        </div>
        <div className="text-gray-400 text-xs sm:text-base">
          <p>Dynasty: Ahichchhatra</p>
          <p>Period: 200 CE</p>
          <p>Material: Sandstone</p>
          <p>Location: National Museum</p>
        </div>
        <h1 className="text-xs font-semibold mt-1 sm:text-base sm:mt-3">
          Description
        </h1>

        {/* <div className="mt-2 whitespace-pre-line">
        {showDescription ? description : description.slice(0, 200)}

        <span
          className="font-bold cursor-pointer active:bg-gray-400 m-3"
          onClick={() => setShowDescription((bool) => !bool)}
        >
          {showDescription ? "Show less" : "Show more"}
        </span>
      </div> */}
        <p className="text-xs text-gray-400 sm:text-base ">
          {showDescription ? description : description.slice(0, 200)}
        </p>
        <div
          className="flex items-center mt-2 text-red-800 cursor-pointer"
          onClick={() => setShowDescription((bool) => !bool)}
        >
          <BsArrowRightShort className="mt-1" />
          {showDescription ? (
            <span className="text-xs ml-1 sm:text-lg">Read Less</span>
          ) : (
            <span className="text-xs ml-1 sm:text-lg">Read More</span>
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
