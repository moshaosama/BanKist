import clsx from "clsx";
import FooterStyle from "./Footer.module.css";
import  globalStyle  from "../../Styles/global.module.css";
import useSetAnimation from "../../Hooks/useSetAnimation";

const Footer = () => {
  const { container, Btn, Header_Details } = FooterStyle;
  const { hr } = globalStyle;
  const { isTransiton } = useSetAnimation(2800);
  return (
    <>
      <div
        className={clsx(
          container,
          "transition-all duration-700",
          isTransiton
            ? "opacity-100 relative top-0"
            : "opacity-0 relative top-20"
        )}
      >
        <div className={Header_Details}>
          <h1 className="text-3xl font-bold w-[35pc] max-sm:w-fit text-center">
            The best time to join Bankist was a year ago. The second best time
            is today
          </h1>
          <button className={clsx(Btn, "transition-all duration-500")}>
            Open your free account today
          </button>
        </div>
        <hr className={hr} />
        <div className="py-32 flex justify-center">
          <div className="grid grid-cols-7 max-sm:grid-cols-4 text-center">
            <h1 className="hover:underline cursor-pointer">About</h1>
            <h1 className="hover:underline cursor-pointer">Pricing</h1>
            <h1 className="hover:underline cursor-pointer">Terms of Use</h1>
            <h1 className="hover:underline cursor-pointer">Privacy Policy</h1>
            <h1 className="hover:underline cursor-pointer">Careers</h1>
            <h1 className="hover:underline cursor-pointer">Blog</h1>
            <h1 className="hover:underline cursor-pointer">Contact Us</h1>
          </div>
        </div>
        <div className="flex justify-center pb-14">
          <h1>
            developed by <span>Mohamed Osama</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
