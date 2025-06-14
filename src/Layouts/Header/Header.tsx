import { globalStyle } from "../../Styles";
import styleHeader from "./Header.module.css";
import clsx from "clsx";
export const Header = () => {
  const { image_header, button, container_header, link_text } = styleHeader;
  const { container } = globalStyle();
  return (
    <>
      <div className={clsx(container, container_header)}>
        <img
          className={image_header}
          src="logo__1_-removebg-preview.png"
          alt="HeaderLogo.png"
        />
        <div className="flex items-center gap-10">
          <h1 className={link_text}>Features</h1>
          <h1 className={link_text}>Operations</h1>
          <h1 className={link_text}>Testimonials</h1>
          <button className={button}>Open Account</button>
        </div>
      </div>
    </>
  );
};
