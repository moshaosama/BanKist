import { useEffect, useState } from "react";
import  globalStyle  from "../../Styles/global.module.css";
import styleHeader from "./Header.module.css";
import clsx from "clsx";
import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import { useSidebarContext } from "../../Context/SidebarContext";
export const Header = () => {
  const { image_header, button, container_header, link_text } = styleHeader;
  const { container } = globalStyle;
  const { handleTriggerSidebar, isOpen } = useSidebarContext();
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    const handleScroll = async () => {
      if (window.scrollY >= 900) {
        setIsNext(true);
      } else {
        setIsNext(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isOpen ? (
        <div className="flex justify-end" onClick={handleTriggerSidebar}>
          <HiMiniXMark size={80} />
        </div>
      ) : (
        <div
          className={clsx(
            "transition-all duration-700",
            isNext ? "fixed z-50 bg-white w-full top-0 py-3" : ""
          )}
        >
          <div
            className={clsx(
              container,
              container_header,
              "max-sm:m-0 max-sm:p-5"
            )}
          >
            <img
              className={image_header}
              src="logo__1_-removebg-preview.png"
              alt="HeaderLogo.png"
            />
            <div className="flex items-center gap-10 max-sm:hidden">
              <h1 className={link_text}>Features</h1>
              <h1 className={link_text}>Operations</h1>
              <h1 className={link_text}>Testimonials</h1>
              <button className={button}>Open Account</button>
            </div>
            <div className="sm:hidden" onClick={handleTriggerSidebar}>
              <HiBars3BottomRight size={50} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
