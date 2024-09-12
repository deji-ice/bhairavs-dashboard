import { CategoryIcon, NotificationsIcon, SearchIcon, SortIcon } from "../assets/SVG";

const Header = ({ title, path }) => {

  console.log(path);
  return (
    <header className="fixed bg-white top-0 py-5 left-[22%] px-8  gap-5 flex flex-col right-0   ">
      <div className="flex items-center  justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {path == "/overview" && (
            <p className="text-[#54577A]">Let's finish your task today!</p>
          )}
        </div>
        <span className="flex items-center gap-[24px]">
          <NotificationsIcon />
          <img className="h-[52px]" src="/Profil.png" alt="" />
        </span>
      </div>
      {path == "/task" && (
        <div className="flex justify-between  items-center">
          <span className="relative ">
            <input
              placeholder="Search  Task"
              className=" placeholder:text-xs placeholder:pl-10 pl-5 placeholder:text-[#54577a] bg-white p-1 border border-[#F5F5F7] rounded-md"
              type="text"
            />
            <SearchIcon className="absolute top-2 h-4 bottom-0 right-2" />
          </span>
          <div className="text-xs flex gap-4 font-semibold">
            <button className="bg-white flex justify-between items-center gap-3  py-2 px-3 border border-[#F5F5F7] rounded-md">
              <CategoryIcon />
              Category
            </button>
            <button className="bg-white flex justify-between items-center gap-3  py-2 px-3 border border-[#F5F5F7] rounded-md">
              <SortIcon/>
              Sort by: Deadline
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
