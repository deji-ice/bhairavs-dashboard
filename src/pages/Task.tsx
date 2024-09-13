import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { tasks } from "../mockData/task";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const Task = () => {
  const path = useLocation().pathname;
  return (
    <div className="bg-[#fafafa] flex-[4] flex flex-col p-5">
      <Header title={"Explore Task"} path={path} />
      <div className="p-5 flex flex-col mt-32 gap-7">
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
        <div className="flex   justify-between items-center gap-5">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="w-fit flex flex-col gap-3 bg-white p-4 rounded-lg"
            >
              <div className="">
                <img
                  className="h-[6rem] min-w-[240px]"
                  src={task.image.img}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-sm font-bold">{task.title}</h3>
                <p>{task.name}</p>
              </div>
              <div className="flex justify-between">
                <p>Progress</p>
                <span>{task.progress}</span>
              </div>
              <div
                className="bg-blue-600 h-[0.5rem] rounded-full"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
