import "./App.css";
import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import Overview from "./pages/Overview";
import Task from "./pages/Task";
import Mentors from "./pages/Mentors";
import Message from "./pages/Message";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="flex  bg-[#ffffff] h-full font-Jakarta">
      <Aside />
      <Routes>
        <Route path="/" element={<Overview />} />z
        <Route path="/task" element={<Task />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
