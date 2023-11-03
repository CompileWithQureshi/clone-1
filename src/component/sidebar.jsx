// import data from "./data";
import { RxDashboard } from "react-icons/rx";
import {
  FaShippingFast,
  FaPrescriptionBottle,
  FaUserCog,
} from "react-icons/fa";
import { TbTableAlias, TbTrolley } from "react-icons/tb";
import { BsPersonAdd, BsFillHouseAddFill, BsGraphUp } from "react-icons/bs";
import {
  MdPayment,
  MdSecurity,
  MdSettings,
  MdContactSupport,
} from "react-icons/md";

function Sidebar() {
  const data = [
    {
      id: 1,
      url: <RxDashboard />,
      text: "Search",
    },
    {
      id: 2,
      url: <FaShippingFast />,
      text: "snd",
    },
    {
      id: 3,
      url: <TbTableAlias />,
      text: "but",
    },
    {
      id: 4,
      url: <BsPersonAdd />,
      text: "naan",
    },
    {
      id: 5,
      url: <TbTrolley />,
      text: "wtf",
    },
    {
      id: 6,
      url: <BsFillHouseAddFill />,
      text: "omgg",
    },
    {
      id: 7,
      url: <BsGraphUp />,
      text: "lol",
    },
    {
      id: 8,
      url: <MdPayment />,
      text: "find",
    },
    {
      id: 9,
      url: <MdSecurity />,
      text: "done",
    },
    {
      id: 10,
      url: <FaPrescriptionBottle />,
      text: "help",
    },
  ];

  const supp = [
    {
      id: 1,
      url: <MdSettings />,
      text: "Setting",
    },
    {
      id: 2,
      url: <FaUserCog />,
      text: "User-mangment",
    },
    {
      id: 3,
      url: <MdContactSupport />,
      text: "Help & support",
    },
  ];

  return (
    <div>
      <div className=" h-full p-3  w-52 bg-[#001D22] dark:text-gray-100 rounded-s-lg ">
        <div className="flex items-center justify-between border-b-2 border-white-500">
          <h2>Dashboard</h2>
          <button className="p-2">
            <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 001.04 2.15C1 2.324 1 2.52 1 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 002.15 6.96C2.324 7 2.52 7 2.75 7H5.25c.229 0 .426 0 .6-.041A1.5 1.5 0 006.96 5.85C7 5.676 7 5.48 7 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 005.85 1.04C5.676 1 5.48 1 5.25 1H2.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 01-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 2.15C8 2.324 8 2.52 8 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 6.96C9.324 7 9.52 7 9.75 7H12.25c.229 0 .426 0 .6-.041A1.5 1.5 0 0013.96 5.85C14 5.676 14 5.48 14 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 1.04C12.676 1 12.48 1 12.25 1H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM2.75 8H5.25c.229 0 .426 0 .6.041A1.5 1.5 0 016.96 9.15C7 9.324 7 9.52 7 9.75V12.25c0 .229 0 .426-.041.6A1.5 1.5 0 015.85 13.96C5.676 14 5.48 14 5.25 14H2.75c-.229 0-.426 0-.6-.041A1.5 1.5 0 011.04 12.85C1 12.676 1 12.48 1 12.25V9.75c0-.229 0-.426.041-.6A1.5 1.5 0 012.15 8.04C2.324 8 2.52 8 2.75 8zm.05 1c-.308 0-.374.003-.417.014a.5.5 0 00-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 00.37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 00.37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 00-.37-.37C5.575 9.004 5.509 9 5.2 9H2.8zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 9.15C8 9.324 8 9.52 8 9.75V12.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 13.96c.174.041.371.041.6.041H12.25c.229 0 .426 0 .6-.041a1.5 1.5 0 001.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 8.04C12.676 8 12.48 8 12.25 8H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 01-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className=" flex flex-col justify-between   gap-y-44 pt-2">
          <div>
            <ul className=" pb-28  leading-tight    ">
              {data.map(({ id, text, url }) => (
                <li className="rounded-sm  " key={id}>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    {url}
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className=" ">
            <ul className="   leading-tight    ">
              {supp.map(({ id, text, url }) => (
                <li className="rounded-sm  " key={id}>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    {url}

                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className=" flex gap-2  text-center mt-2 border-t-2 p-2">
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="w-12 h-12  rounded-full dark:bg-gray-500"
              />
              <div>
                <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                <span className="flex items-center space-x-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    View profile
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

{
  /* <div>

<div
  className="  border border-white 
   "
>
 
  
</div>
</div> */
}
