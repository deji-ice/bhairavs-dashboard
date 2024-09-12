import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const First = () => {
  const percent = 45;
  return (
    <div className="flex gap-5 font-Jakarta text-white ">
      <div className="bg-[#141522] h-[214px] pl-6 w-[194px] py-5 rounded-xl flex flex-col gap-4">
        <h1 className="text-[16px] ">Running Task</h1>
        <h3 className="text-[32px] font-semibold">65</h3>
        <div className="flex gap-4 items-center">
          <CircularProgressbar
            value={percent}
            text={`${percent}%`}
            className="h-[68px] w-[68px] text-white"
          />
          <h1 className="flex flex-col gap-2">
            <span className="text-[20px]">100</span>
            <span className="text-[14px] text-[#494C65]">Task</span>
          </h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default First;
