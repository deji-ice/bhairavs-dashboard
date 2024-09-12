import { SetStateAction, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Select from "react-select";
import Chart from "./Chart";


const options = [
  { value: "This week", label: "This week" },
  { value: "Next week", label: "Next Week" },
  { value: "Upper", label: "upper" },
];
// for the select 
const First = () => {
  const percent = 45;

  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  }>({ value: "This week", label: "This week" });

  const handleChange = (
    selectedOption: SetStateAction<null | { value: string; label: string }>
  ) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  // end of select function

 

  return (
    <div className="flex gap-12 font-Jakarta text-white ">
      <div className="bg-[#141522] h-[214px] pl-6 w-[194px] py-5 rounded-xl flex flex-col gap-4">
        <h1 className="text-[16px] ">Running Task</h1>
        <h3 className="text-[32px] font-semibold">65</h3>
        <div className="flex gap-4 items-center  ">
          <CircularProgressbar
            value={percent}
            text={`${percent}%`}
            className="h-[68px] w-[68px]  text-white"
          />
          <h1 className="flex flex-col gap-2 ">
            <span className="text-[20px]">100</span>
            <span className="text-[14px] text-[#494C65]">Task</span>
          </h1>
        </div>
      </div>
      <div className="h-[214px] w-[462px]   flex flex-col  gap-4">
        <div className="flex justify-between  text-black font-semibold items-center">
          <h1>Activity</h1>
          <div className="flex gap-2">
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "transparent", // Remove white background
                  borderColor: state.isFocused ? "transparent" : "transparent", // Remove blue border on focus
                  boxShadow: "none", // Remove the default focus outline (blue shadow)
                  "&:hover": {
                    borderColor: "#DDDDDD", // Optional: Set border color when hovered
                  },
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "#141522", // Customize dropdown background if needed
                }),
              }}
              value={selectedOption}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="w-[422px] h-[130px] bg-white rounded-xl ">
       <Chart/>
        </div>
      </div>
      {/* middle part */}
      <div>

      </div>
    </div>
  );
};

export default First;
