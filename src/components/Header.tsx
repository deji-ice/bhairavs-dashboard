import { NotificationsIcon } from "../assets/SVG";

const Header = () => {
  return (
    <header className="fixed top-5 left-[22%] px-8  right-0   ">
      <div className="flex items-center  justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Hi, Dennis Nzioki</h3>
          <p className="text-[#54577A]">Let's finish your task today!</p>
        </div>
        <span className="flex items-center gap-[24px]">
          <NotificationsIcon />
          <img className="h-[52px]" src="/Profil.png" alt="" />
        </span>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
