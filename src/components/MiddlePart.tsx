

import { data } from "../assets/Avuwa";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const MiddlePart = () => {
  return (
    <>
    <div className="flex justify-between text-black mt-[3rem] mb-[1rem]">
        <h1 className="text-[25px] font-semibold">Monthly Mentors</h1>
        <h3 className="flex">
        <FaGreaterThan />
        <FaLessThan/>
        </h3>
    </div>
    <div className="flex gap-4 font-Jakarta">

      <div className="flex  overflow-x-hidden gap-4">
        {data.map((item) => (
          <div className=" bg-white px-2 gap-8 pt-6 rounded-2xl text-black w-[300px] h-[140px] flex flex-col">
            <div className="flex justify-between gap-2 mx-auto">
              <img className="w-[48px] h-[48px]" src={item.img} alt="" />
              <h1 className="flex flex-col gap2 w-[134px]  ">
                {" "}
                <span className="font-semibold text-[16px]">
                  {item.name}
                </span>{" "}
                <span className="text-12px text-[#54577A] font-medium">
                  {item.stack}
                </span>
              </h1>
              <h3 className="text-[14px] font-medium text-[#6981FF] ">
                {item.follow}
              </h3>
            </div>
            <div className="flex justify-between items-center px-4 text-[14px] font-medium">
              <h1 className="flex  gap-1">
                <span>
                  <img
                    src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1726186616/note-2_nooi5x.png"
                    alt=""
                  />
                </span>
                <span>{item.task}</span>
              </h1>
              <h3>⭐{item.review}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MiddlePart;
