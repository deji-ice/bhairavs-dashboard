import { QuestionIcon } from "../assets/SVG";

const HelpCenter = () => {
  return (
    <div
      className="h-full relative  bg-[#141522] rounded-lg w-[13rem] 
    flex flex-col py-5 gap-10 items-center text-white"
    >
      <img className="absolute bottom-0 right-0 h-20 -z-0" src="/bg2.png" alt="" />
      <img className="absolute top-0 left-0 h-20 -z-0" src="/bg1.png" alt="" />
      <QuestionIcon className={`absolute -top-10`} />
      <div className=" flex flex-col gap-3 mt-10 items-center font-semibold justify-center">
        <h3 className="text-base">Help Center</h3>
        <p className="text-xs text-center px-5">
          Having Trouble in Learning. Please contact us for more questions.
        </p>
      </div>
      <button className="bg-white w-fit font-semibold  text-xs rounded-md px-5 py-3 text-[#141522]">
        Go To Help Center
      </button>
    </div>
  );
};

export default HelpCenter;
