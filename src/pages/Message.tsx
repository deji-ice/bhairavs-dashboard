import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const Message = () => {
  const path = useLocation().pathname;
  return (
    <div className="bg-white flex-[4] p-5 flex flex-col">
      <Header title={"Message"} path={path} />
      Message
    </div>
  );
};

export default Message;
