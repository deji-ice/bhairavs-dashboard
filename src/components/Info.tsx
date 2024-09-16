import Calendar from "./Calender";
import { today } from "../mockData/task";
import { GoClock } from "react-icons/go";

const Info = () => {
  return (
    <div className="w-[372px] py-6 flex flex-col font-Jakarta   ml-[-20px]">
      <div className="">
        <Calendar />
      </div>
      <div className="w-[372px] h-[610px] bg-white flex flex-col mt-[5rem] rounded-[6px]">
        <div className="flex gap-4 ">
          {today.map((item) => (
            <div className=" bg-white    pt-6  gap-3 mx-auto rounded-2xl text-black w-[328px] h-[314px] flex flex-col">
              <img
                src={item.image.img}
                alt=""
                className="h-[160px] w-[324px]  "
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
              <div className="flex justify-between mb-4">
                <div className="flex gap-2 items-center">
                  <GoClock />
                  <h4 className="text-[16px] font-medium">{item.hour}</h4>
                </div>
                <img
                  src={item.image.studentImg}
                  alt=""
                  className="w-[88px] h-[24px]"
                />
              </div>
              <div>
                <div className="flex justify-between mb-4">
                  <h1 className="text-[16px] font-semibold ">Detail Tasks</h1>
                  <h3 className="text-[12px] font-medium text-[#54577A]">{item.name}</h3>
                </div>
                <h1 className="text-[14px] font-semibold mb-6">
                  {" "}
                  <span className="h-[36px] w-[36px] bg-[#F5F5F7] px-4 py-1 mr-2 rounded-[10px] ">1</span> Understanding the tools in Figma
                </h1 >
                <h1 className="text-[14px] font-semibold mb-6">
                  <span className="h-[36px] w-[36px] bg-[#F5F5F7] px-4 py-1 mr-2 rounded-[10px] ">2</span>Understand the basics of making designs
                </h1>
                <h1 className="text-[14px] font-semibold mb-6 ">
                  <span className="h-[36px] w-[36px] bg-[#F5F5F7] px-4 py-1 mr-2 rounded-[10px] ">3</span>Design a mobile application with figma
                </h1>
              </div>
              <button className="w-[324px] h-[44px] text-center bg-[#546FFF] mt-[2rem] py-2 rounded-[10px] ">Go To Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
