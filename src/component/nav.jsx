import { FiChevronLeft, FiChevronRight, FiSidebar } from "react-icons/fi";
import { BiSolidAdjust } from "react-icons/bi";
// import { UilLock } from "@iconscout/react-unicons";
import { UilRedo } from "@iconscout/react-unicons";
import { UisLock } from "@iconscout/react-unicons-solid";

function Nav() {
  return (
    <div className=" max-w-screen-5xl max-h-7  flex  justify-between  items-center">
      <div className="flex space-x-1 p-3">
        <span className="w-3 h-3 bg-red-600 rounded-full text-red-600"></span>
        <span className="w-3 h-3 bg-orange-600 rounded-full text-red-600"></span>
        <span className="w-3 h-3 bg-green-600 rounded-full text-green-600"></span>
        <FiSidebar />
        <FiChevronLeft />

        <FiChevronRight />
      </div>
      <div className="  flex gap-4  ">
        <BiSolidAdjust />
        <div
          className="bg-slate-400 w-[405px]
           h-6 border flex p-22 items-center justify-between rounded-md"
        >
          <p className="pl-10 flex text-sm">
            <UisLock size="18 " />
            shiptrack.com/dashboard
          </p>
          <p>
            {" "}
            <UilRedo size="15" />
          </p>
        </div>
      </div>
      <div>
        <span>icon</span>
        <span>icon</span>
        <span>ico</span>
        <span>icon</span>
      </div>
    </div>
  );
}

export default Nav;
