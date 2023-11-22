import { FiSearch } from "react-icons/fi";
// import { HiMiniBell } from "react-icons/hi2";
import { HiMiniBell } from "react-icons/hi2";
import Cards from "./cards";
import Client from "./clieent-activity";

function Main() {
  return (
    <>
      <div className=" flex-col w-full">
        <div className="flex border-white-700  border-b-2 h-11 justify-between items-center">
          <p className=" text-lg font-bold">Dashboard</p>
          <div className="flex  items-center">
            <div className=" w-fit h-6 flex justify-start items-center border rounded-md  gap-1">
              <FiSearch className=" w-8 h-4 " />
              <input
                type="text"
                id="default-search"
                className="   w-full h-3 text-sm border-none "
                placeholder="Search... "
              />
            </div>

            <span className=" mr-2 border rounded-md w-6 h-6 grid items-center place-content-center">
              <HiMiniBell />
            </span>
          </div>
        </div>
        <Cards />
        <Client />
        {/* <Cards /> */}
        {/* <Cards /> */}
      </div>
    </>
  );
}

export default Main;
