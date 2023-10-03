// import data from "./data";

function Sidebar() {
  const data = [
    {
      id: 1,
      url: "http://www.w3.org/2000/svg",
      text: "Search",
    },
    {
      id: 2,
      url: "http://www.w3.org/2000/svg",
      text: "snd",
    },
    {
      id: 3,
      url: "http://www.w3.org/2000/svg",
      text: "but",
    },
    {
      id: 4,
      url: "http://www.w3.org/2000/svg",
      text: "naan",
    },
    {
      id: 5,
      url: "http://www.w3.org/2000/svg",
      text: "wtf",
    },
    {
      id: 6,
      url: "http://www.w3.org/2000/svg",
      text: "omgg",
    },
    {
      id: 7,
      url: "http://www.w3.org/2000/svg",
      text: "lol",
    },
    {
      id: 8,
      url: "http://www.w3.org/2000/svg",
      text: "find",
    },
    {
      id: 9,
      url: "http://www.w3.org/2000/svg",
      text: "done",
    },
    {
      id: 10,
      url: "http://www.w3.org/2000/svg",
      text: "help",
    },
  ];

  const supp = [
    {
      id: 1,
      url: "http://www.w3.org/2000/svg",
      text: "Setting",
    },
    {
      id: 2,
      url: "http://www.w3.org/2000/svg",
      text: "User-mangment",
    },
    {
      id: 3,
      url: "http://www.w3.org/2000/svg",
      text: "Help & support",
    },
  ];

  // data.map(({ text, id, url }) => {
  //   console.log(id);
  //   console.log(text);
  //   console.log(url);
  // });
  // console.log(data);
  return (
    <div>
      <div className=" h-full p-3  w-52 dark:bg-gray-900 dark:text-gray-100 rounded-s-lg ">
        <div className="flex items-center justify-between border-b-2 border-red-500">
          <h2>Dashboard</h2>
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current dark:text-gray-100"
            >
              <rect width="352" height="32" x="80" y="96"></rect>
              <rect width="352" height="32" x="80" y="240"></rect>
              <rect width="352" height="32" x="80" y="384"></rect>
            </svg>
          </button>
        </div>
        <div className=" flex flex-col justify-between   gap-y-44">
          <div>
            <ul className=" pb-28  leading-tight    ">
              {data.map(({ id, text, url }) => (
                <li className="rounded-sm  " key={id}>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns={url}
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                    </svg>
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
                    <svg
                      xmlns={url}
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-400"
                    >
                      <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                    </svg>
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
