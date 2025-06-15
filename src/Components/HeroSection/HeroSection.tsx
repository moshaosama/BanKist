import clsx from "clsx";
import  globalStyle  from "../../Styles/global.module.css";
import HeroSectionStyle from "./HerSection.module.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { container, hr } = globalStyle;
  const { container_hero_section, header_text, span_text, button_text } =
    HeroSectionStyle;

  const [IsTransition, setIsTransition] = useState(false);
  useEffect(() => {
    const setAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setIsTransition(true);
    };
    setAnimation();
  }, []);
  return (
    <>
      <div
        className={clsx(
          container,
          container_hero_section,
          "transition-all duration-700 max-sm:flex-col",
          IsTransition
            ? "opacity-100 relative top-0"
            : "opacity-0 relative top-20"
        )}
      >
        <div>
          <h1 className={clsx(header_text)}>
            When <span className={span_text}>banking</span> meets{" "}
            <span className={span_text}>minimalist</span>
          </h1>
          <p className="text-3xl w-[37pc] font-semibold max-sm:w-fit max-sm:text-xl">
            A simpler banking experience for a simpler life
          </p>
          <button className={button_text}>Learn more ↓</button>
        </div>
        <img
          src="hero.png"
          alt="HeroSection.png"
          className="w-[30pc] max-sm:w-[20pc] max-sm:mt-10"
        />
      </div>
      <hr className={hr} />
    </>
  );
};

export default HeroSection;
