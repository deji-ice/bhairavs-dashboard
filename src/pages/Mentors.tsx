import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const Mentors = () => {
  const path = useLocation().pathname;
  return (
    <div className="bg-white flex-[4] flex flex-col p-5">
      <Header title={"Explore Mentors"} path={path} />
      Mentors - Oluwasegunfunmi{" "}
    </div>
  );
};

export default Mentors;
