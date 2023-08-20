import React from "react";
import { AiOutlineLike, AiOutlineShareAlt, AiOutlineEye } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="px-4 col-span-1 w-80">
      <MdOutlineKeyboardArrowLeft
        size={25}
        className="text-red-600 bg-gray-300 rounded-full mb-6 top-[10px] left-[0px] mt-3"
      />
      <h1 className="text-2xl">
        MAITREYA BUDDHA IN GESTURE OF FEARLESS (ABHAYA MUDRA)
      </h1>
      <div className="flex justify-between mt-4 mb-4">
        <div className="flex flex-col">
          <div>
            <AiOutlineLike className="bg-gray-300 rounded-full" size={25} />
          </div>
          <p className="text-center">0</p>
        </div>
        <div>
          <AiOutlineShareAlt className="bg-gray-300 rounded-full" size={25} />
          <p className="text-center">120</p>
        </div>
        <div>
          <AiOutlineEye className="bg-gray-300 rounded-full" size={25} />
          <p className="text-center">27</p>
        </div>
      </div>
      <div className="text-gray-400 text-sm">
        <p>Dynasty: Ahichchhatra</p>
        <p>Period: 200 CE</p>
        <p>Material: Sandstone</p>
        <p>Location: National Museum</p>
      </div>
      <h1 className="font-semibold mt-2">Description</h1>
      <p className="text-sm text-gray-400 ">
        Maitreya, the future Budha to be, resides in the Tushita heaven as a
        bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the
        eighth Buddha, a successor of the seven historical Buddhas
        (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Budha will
        be born in ketumati, in present-day Varanasi, Uttar Pradesh. As a
        bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets,
        necklaces, and an amulet.The
      </p>
      <div className="flex items-center mt-2 text-red-800 cursor-pointer">
        <BsArrowRightShort className="mt-1" />
        <span className="text-sm ml-1">Read More</span>
      </div>
      <div className="flex mt-2">
        <button
          className="text-white bg-orange-900 text-sm font-bold px-4 py-2 rounded-lg mr-2"
          type="button"
        >
          ADD TO COLLECTIONS
        </button>
        <button
          className="text-orange-900 bg-white border border-orange-900 px-4 font-bold py-2 rounded-lg text-sm"
          type="button"
        >
          SOUVENIR
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
