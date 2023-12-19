import toggleBtn from "../../../assets/theme-btn.svg";
import avatar from "../../../assets/Avatar.svg";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <nav className="header flex justify-between items-center">
      <h1 className="text-3xl text-gray-800">Home</h1>
      <div className="profile w-52 flex justify-between items-center">
        <div className="theme border border-pink-200 rounded-3xl w-20 flex justify-end">
          <img className="w-8" src={toggleBtn} alt="toggle-theme" />
        </div>
        <div className="avatar flex items-center">
          <img className="mx-2 border rounded-full" src={avatar} alt="avatar" />
          <IoIosArrowDown size={40}></IoIosArrowDown>
        </div>
      </div>
    </nav>
  );
};

export default Header;
