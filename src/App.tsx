import "./App.css";
import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import Overview from "./pages/Overview";
import Task from "./pages/tasks/Task";
import Mentors from "./pages/Mentors";
import Message from "./pages/Message";
import Settings from "./pages/Settings";
import PopUpModal from "./components/PopUpModal";
import { useEffect, useState } from "react";

function App() {
  const [closeModal, setCloseModal] = useState(true);
  const onclick = () => {
    setCloseModal(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setCloseModal(false);
    }, 3000);
  }, []);
  return (
    <div className="flex   bg-[#ffffff] h-full font-Jakarta">
      {!closeModal && <PopUpModal close={onclick} />}
      <Aside />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/task" element={<Task />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
