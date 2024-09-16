import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PopUpModal = ({ close }: { close: () => void }) => {
  return (
    <div className="fixed h-screen w-screen top-0 left-0 bg-black/80 flex justify-center items-center z-[60]">
      <div className="z-50 flex flex-col items-center h-fit w-[25rem] bg-white p-4 rounded shadow-lg">
        <h2 className="text-black text-lg font-semibold">PopUpModal</h2>
        <div className="flex flex-col items-center">
          <h2 className="text-black">Time Limit</h2>
          <span className="flex gap-10 justify-center mt-3 w-full">
            <button className="text-black hover:text-gray-700">
              <FaArrowLeft />
            </button>
            <button className="text-black hover:text-gray-700">
              <FaArrowRight />
            </button>
          </span>
          <form className="flex flex-col justify-center gap-3 mt-4">
            <label className="text-black" htmlFor="task">
              Task
            </label>
            <input
              className="border border-gray-300 rounded p-1"
              type="text"
              id="task"
            />
            <label className="text-black" htmlFor="description">
              Description
            </label>
            <textarea
              className="border border-gray-300 rounded p-1"
              id="description"
            />
            <label className="text-black" htmlFor="date">
              Date
            </label>
            <input
              className="border border-gray-300 rounded p-1"
              type="date"
              id="date"
            />
            <label className="text-black" htmlFor="time">
              Time
            </label>
            <input
              className="border border-gray-300 rounded p-1"
              type="time"
              id="time"
            />
            <div className="flex justify-between mt-4">
              <button
                className="bg-black text-white rounded p-2 hover:bg-gray-800"
                disabled
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-gray-300 text-black rounded p-2 hover:bg-gray-400"
                type="button"
                onClick={close}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
