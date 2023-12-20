import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Sidebar from "../components/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="main flex">
      <div className="sidebar-section bg-slate-50 shadow-lg">
        <Sidebar></Sidebar>
      </div>
      <div className="main-section py-5 mx-20 w-full">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
