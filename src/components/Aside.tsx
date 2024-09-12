import {
  Logo,
  MentorsIcon,
  MessagesIcon,
  OverviewIcon,
  SettingsIcon,
  TaskIcon,
} from "../assets/SVG";
import { NavLink } from "react-router-dom";
import HelpCenter from "./HelpCenter";

const Aside = () => {
  return (
    <aside className="flex flex-col flex-1 p-5">
      <div>
        <Logo />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="text-[#8E92BC] text-sm py-10 flex flex-col gap-5 font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex gap-4 py-2 px-3 rounded-lg ${
                isActive ? "bg-gray-500  text-black" : "hover:bg-gray-500"
              }`
            }
          >
            <OverviewIcon /> <p>Overview</p>
          </NavLink>
          <NavLink
            to={"/task"}
            className={({ isActive }) =>
              `flex gap-4 py-2 px-3 rounded-lg ${
                isActive ? "bg-gray-500  text-black" : "hover:bg-gray-500"
              }`
            }
          >
            <TaskIcon /> <p>Task</p>
          </NavLink>
          <NavLink
            to={"/mentors"}
            className={({ isActive }) =>
              `flex gap-4 py-2 px-3 rounded-lg ${
                isActive ? "bg-gray-500 text-black" : "hover:bg-gray-500"
              }`
            }
          >
            <MentorsIcon /> <p>Mentors</p>
          </NavLink>
          <NavLink
            to={"/messages"}
            className={({ isActive }) =>
              `flex gap-4 py-2 px-3 rounded-lg ${
                isActive ? "bg-gray-500  text-black" : "hover:bg-gray-500"
              }`
            }
          >
            <MessagesIcon /> <p>Message</p>
          </NavLink>
          <NavLink
            to={"/settings"}
            className={({ isActive }) =>
              `flex gap-4 py-2 px-3 rounded-lg ${
                isActive ? "bg-gray-500  text-black" : "hover:bg-gray-500"
              }`
            }
          >
            <SettingsIcon /> <p>Settings</p>
          </NavLink>
        </div>
        <HelpCenter />
      </div>
    </aside>
  );
};

export default Aside;
