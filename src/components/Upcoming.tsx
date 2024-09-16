import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { tasks } from "../mockData/task";
import { useRef } from "react";
import { GoClock } from "react-icons/go";
import ProgressBar from "@ramonak/react-progress-bar";

const Upcoming = () => {
  const scrollContainerRef = useRef(null);

  // Scroll Left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -328, // Adjust this value based on the width of the card
      behavior: "smooth",
    });
  };

  // Scroll Right
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 328,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-[380px] w-[688px] mt-[2rem] text-black">
      <div className="flex items-center justify-between text-black  mb-[1rem] h-[36px] ">
        <h1 className="text-[25px] font-semibold">Upcoming Tasks</h1>
        <h3 className="flex  gap-2 *:font-thin *:text-[13px] mr-[30px]">
          <FaLessThan onClick={scrollLeft} className="cursor-pointer" />
          <FaGreaterThan onClick={scrollRight} className="cursor-pointer" />
        </h3>
      </div>
      <div
        className="flex gap-4 font-Jakarta overflow-y-scroll no-scrollbar"
        ref={scrollContainerRef}
      >
        <div className="flex gap-4 ">
          {tasks.map((item) => (
            <div className=" bg-white   p-6  gap-3  rounded-2xl text-black w-[328px] h-[314px] flex flex-col">
              <img
                src={item.image.img}
                alt=""
                className="h-[110px] w-[280px]  "
              />
              <h1 className="font-semibold text-[16px]">
                Creating Mobile App Design
              </h1>
              <h3 className="text-12px text-[#54577A] font-medium">
                UI UX Design
              </h3>
              <div className="flex flex-col justify-between ">
                <div className="flex justify-between mb-2 *:text-[16px] *:font-medium">
                  <h1>Progress</h1>
                  <p>{item.progress}%</p>
                </div>
                <div className="bg-[#BAC8FF] rounded-full">
                <div
                  className="bg-blue-600 h-[0.5rem] rounded-full "
                  style={{ width: `${item.progress}%` }}
                ></div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <GoClock />
                  <h4>{item.days}</h4>
                </div>
                <img
                  src={item.image.studentImg}
                  alt=""
                  className="w-[88px] h-[24px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
