import { MdOutlinePendingActions, MdAttachMoney } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { GiPlagueDoctorProfile } from "react-icons/gi";

function Cards() {
  const details = [
    {
      btn: <AiOutlineProfile />,
      topic: "Total shpiments",
      btn2: "...",
      price: 500,
    },
    {
      btn: <MdOutlinePendingActions />,
      topic: "pending orders",
      btn2: "...",
      price: 500,
    },
    { btn: <MdAttachMoney />, topic: "Revenue", btn2: "...", price: 500 },
    {
      btn: <GiPlagueDoctorProfile />,
      topic: "Total client",
      btn2: "...",
      price: 500,
    },
  ];
  console.log(details);
  return (
    <>
      <div className=" flex justify-evenly gap-2 border-b-2 p-2  h-max m-2  ">
        {details.map(({ btn, btn2, topic, price }) => (
          <div
            className=" flex-col w-56 h-24 px-3 py-2 rounded-xl border-2   justify-between items-start align-middle  "
            key={topic}
          >
            <button className="w-8  rounded-lg border-2 place-content-center grid">
              {btn}
            </button>
            <div className="flex justify-between items-center  mt-2 text-sm        ">
              <h3>{topic}</h3>
              <button className="w-8  rounded-lg border-2">{btn2}</button>
            </div>

            <h1 className=" font-bold  text-sm">{price}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
