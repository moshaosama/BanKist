import clsx from "clsx";
import { useSidebarContext } from "../../Context/SidebarContext";
import { HiMiniXMark } from "react-icons/hi2";
import styleHeader from "../../Layouts/Header/Header.module.css";

const Sidebar = () => {
  const { isOpen, handleTriggerSidebar } = useSidebarContext();
  const { button, link_text } = styleHeader;
  return (
    <>
      <div
        className={clsx(
          "bg-white fixed h-full z-50 top-0 overflow-hidden transition-all duration-500",
          isOpen ? "w-full" : "w-0"
        )}
      >
        <div className="flex justify-end" onClick={handleTriggerSidebar}>
          <HiMiniXMark size={80} />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 mt-36">
          <a href="#Feature" onClick={handleTriggerSidebar}>
            <h1 className={link_text}>Features</h1>
          </a>
          <a href="#Operation" onClick={handleTriggerSidebar}>
            <h1 className={link_text}>Operations</h1>
          </a>
          <a href="#Testimonials" onClick={handleTriggerSidebar}>
            <h1 className={link_text}>Testimonials</h1>
          </a>
          <button className={button}>Open Account</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
