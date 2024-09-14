import { useRef } from "react";
import { data } from "../assets/Avuwa";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const MiddlePart = () => {
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
    <div className="w-[688px] h-[200px] mt-[3rem]">
      <div className="flex items-center justify-between text-black  mb-[1rem] h-[36px] ">
        <h1 className="text-[25px] font-semibold">Monthly Mentors</h1>
        <h3 className="flex mr-4 gap-2">
          <FaLessThan onClick={scrollLeft} className="cursor-pointer" />
          <FaGreaterThan onClick={scrollRight} className="cursor-pointer" />
        </h3>
      </div>
      <div
        className="flex gap-4 font-Jakarta overflow-y-scroll no-scrollbar"
        ref={scrollContainerRef}
      >
        <div className="flex gap-4 ">
          {data.map((item) => (
            <div className=" bg-white   px-2 gap-8 pt-6 rounded-2xl text-black w-[328px] h-[140px] flex flex-col">
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
                <h3 className="text-[14px] p font-medium text-[#6981FF] ">
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
    </div>
  );
};

export default MiddlePart;
