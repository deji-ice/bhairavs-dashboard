import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import RightSection from "../components/RightSection";

const Overview = () => {
  const path = useLocation().pathname;
  return (
    <div className="bg-[#fafafa] flex-[4] p-5 overflow-x-hidden mt-[7rem]">
      <Header path={path} title={"Hi, Dennis Nzioki"} />
      <div className="grid grid-cols-[1fr,40%] gap-7  ">
        {/* left section */}
        <div className="flex flex-col ">
          <RightSection />
        </div>
        {/* right section */}
        <div className="">nkjkk</div>
      </div>
    </div>
  );
};
export default Overview;
