import {
  add,
  calendar,
  clock,
  home,
  menu,
  settings,
  user,
} from "../assets/icons";

const Sidebar = () => {
  return (
    <div className="min-h-screen fixed left-0 top-0  flex flex-col gap-10 py-7 px-4">
      <div className="flex items-center justify-center px-1 py-[6px] bg-white rounded shadow-sm cursor-pointer">
        <img src={menu} alt="menu icon" className="h-7 w-7" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex-1 flex flex-col items-center gap-4">
          <img src={home} alt="home icon" className="h-8 w-8 cursor-pointer" />
          <img src={user} alt="user icon" className="h-8 w-8 cursor-pointer" />
          <img
            src={calendar}
            alt="calendar icon"
            className="h-8 w-8 cursor-pointer"
          />
          <img
            src={clock}
            alt="clock icon"
            className="h-8 w-8 cursor-pointer"
          />
          <img
            src={settings}
            alt="settings icon"
            className="h-8 w-8 cursor-pointer"
          />
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <div className="flex items-center justify-center bg-salmonDark p-2 rounded-full cursor-pointer ">
            <img src={add} alt="add icon" className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
