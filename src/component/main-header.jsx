// import { FiSearch } from "react-icons/fi";

function Main() {
  return (
    <>
      <div className="flex border-white-500 w-full border-b-2 h-11 justify-between items-center">
        <p className=" text-lg font-bold">Dashboard</p>
        <div className="flex gap-2">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full h-3 text-sm "
            placeholder="Search Mockups, Logos..."
            required
          />
          <span className=" mr-2 ">buton</span>
        </div>
      </div>
    </>
  );
}

export default Main;
