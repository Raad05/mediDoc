import hamburger from "../../../assets/hamburger.svg";
import home from "../../../assets/home.svg";
import contact from "../../../assets/contact.svg";
import calendar from "../../../assets/calendar.svg";
import history from "../../../assets/history.svg";
import settings from "../../../assets/settings.svg";

const Sidebar = () => {
  return (
    <div className="sidebar py-5 flex flex-col items-center h-screen">
      <button className="mb-10">
        <img src={hamburger} alt="hamburger-menu" />
      </button>
      <button className="mb-10">
        <img src={home} alt="home" />
      </button>
      <button className="mb-10">
        <img src={contact} alt="contact" />
      </button>
      <button className="mb-10">
        <img src={calendar} alt="calendar" />
      </button>
      <button className="mb-10">
        <img src={history} alt="history" />
      </button>
      <button className="mb-10">
        <img src={settings} alt="settings" />
      </button>
    </div>
  );
};

export default Sidebar;
