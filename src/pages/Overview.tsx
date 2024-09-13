import Header from "../components/Header";
import RightSection from "../components/RightSection";

const Overview = () => {
  return (
    <div className="bg-[#E8E8E8] flex-[4] p-5 mt-[8rem]">
      <Header />
      <div className="grid grid-cols-[1fr,40%] gap-7 ">
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
