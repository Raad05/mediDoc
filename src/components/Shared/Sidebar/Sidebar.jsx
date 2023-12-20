import hamburger from "../../../assets/hamburger.svg";
import home from "../../../assets/home.svg";
import contact from "../../../assets/contact.svg";
import calendar from "../../../assets/calendar.svg";
import history from "../../../assets/history.svg";
import settings from "../../../assets/settings.svg";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const isCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="sidebar py-5 h-screen">
      {!collapsed ? (
        <div className="flex flex-col items-center w-20">
          <button onClick={isCollapsed} className="mb-20">
            <img className="w-12" src={hamburger} alt="hamburger-menu" />
          </button>
          <button className="my-3">
            <img className="w-12" src={home} alt="home" />
          </button>
          <button className="my-3">
            <img className="w-12" src={contact} alt="contact" />
          </button>
          <button className="my-3">
            <img className="w-12" src={calendar} alt="calendar" />
          </button>
          <button className="my-3">
            <img className="w-12" src={history} alt="history" />
          </button>
          <button className="my-3">
            <img className="w-12" src={settings} alt="settings" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center relative w-80">
          <div className="absolute left-72">
            <button
              onClick={isCollapsed}
              className="p-5 bg-white border shadow-lg rounded-full"
            >
              <IoIosArrowBack
                size={20}
                className="text-pink-400"
              ></IoIosArrowBack>
            </button>
          </div>
          <Link to="/" className="logo mb-20 flex items-center">
            <img src={logo} alt="logo" />
            <p className="text-3xl font-bold">
              Medi<span className="text-pink-400">Doc</span>
            </p>
          </Link>
          <Link className="flex w-60 my-3 items-center">
            <img className="mr-5 w-12" src={home} alt="home" />
            <p className="text-xl">Home</p>
          </Link>
          <Link className="flex w-60 my-3 items-center">
            <img className="mr-5 w-12" src={contact} alt="contact" />
            <p className="text-xl">Patient Profile</p>
          </Link>
          <Link className="flex w-60 my-3 items-center">
            <img className="mr-5 w-12" src={calendar} alt="home" />
            <p className="text-xl">Appointments</p>
          </Link>
          <Link className="flex w-60 my-3 items-center">
            <img className="mr-5 w-12" src={history} alt="history" />
            <p className="text-xl">Medical History</p>
          </Link>
          <Link className="flex w-60 my-3 items-center">
            <img className="mr-5 w-12" src={settings} alt="settings" />
            <p className="text-xl">Settings</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
