import { FiChevronLeft, FiChevronRight, FiSidebar } from "react-icons/fi";
import { BiSolidAdjust } from "react-icons/bi";
// import { UilLock } from "@iconscout/react-unicons";
import { UilRedo, UilPlus } from "@iconscout/react-unicons";
import { UisLock } from "@iconscout/react-unicons-solid";
import {
  UitArrowCircleDown,
  UitUploadAlt,
} from "@iconscout/react-unicons-thinline";
import { IoCopyOutline } from "react-icons/io5";

function Nav() {
  return (
    <div className=" max-w-screen-5xl h-4  flex   justify-between   items-center  border-b-2  py-6">
      <div className="flex space-x-2 p-3  items-center gap-2">
        <span className="w-3 h-3 bg-red-600 rounded-full text-red-600"></span>
        <span className="w-3 h-3 bg-orange-600 rounded-full text-red-600"></span>
        <span className="w-3 h-3 bg-green-600 rounded-full text-green-600"></span>
        <FiSidebar />
        <FiChevronLeft />

        <FiChevronRight />
      </div>
      <div className="  flex gap-4  items-center">
        <BiSolidAdjust />
        <div
          className="bg-[#F0F7F4] w-[605px]
           h-6 border flex pl-22 items-center justify-between rounded-md"
        >
          <p className=" flex text-sm  pl-60">
            <UisLock size="18 " />
            shiptrack.com/dashboard
          </p>
          <p>
            {" "}
            <UilRedo size="15" />
          </p>
        </div>
      </div>
      <div className="flex  justify-around space-x-4 pr-4 items-center">
        <UitArrowCircleDown size="15" />
        <UitUploadAlt size="15" />
        <UilPlus size="15" />
        <IoCopyOutline size="15" />
      </div>
    </div>
  );
}

export default Nav;
