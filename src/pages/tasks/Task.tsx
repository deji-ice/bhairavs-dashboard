import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TaskData from "./TaskData";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";

const Task = () => {
  const path = useLocation().pathname;
  return (
    <>
      <Header path={path} title="hfjd" />
      <div className="bg-gray-300/10 flex-[4] mt-[8rem] p-5">
        <div className="p-5 flex flex-col gap-7">
          <div className="flex justify-between">
            <h2>Time Limit</h2>
            <span className="flex gap-3">
              <button>
                <FaArrowLeft />
              </button>
              <button>
                <FaArrowRight />
              </button>
            </span>
          </div>
          <TaskData />
        </div>
      </div>
    </>
  );
};

export default Task;
