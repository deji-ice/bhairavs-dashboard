import { CiClock2 } from "react-icons/ci";
import { tasks } from "../../mockData/task";


const TaskData = () => {
  return (
    <div className="flex   gap-5 items-center">
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
          <p className="text-xs ">{task.name}</p>
        </div>
        <div className="flex justify-between">
          <p>Progress</p>
          <span className="text-blue-600">{task.progress}</span>
        </div>
        <div
          className="bg-blue-600 h-[0.5rem]  rounded-l-full"
          style={{ width: `${task.progress}%` }}
        ></div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center ">
            <CiClock2 className="" />
            <p>{task.hour}</p>
          </div>
          <img className="h-6" src={task.image.studentImg} alt="" />
        </div>
      </div>
    ))}
  </div>
  )
}

export default TaskData