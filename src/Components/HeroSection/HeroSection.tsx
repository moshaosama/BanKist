import clsx from "clsx";
import { globalStyle } from "../../Styles";
import HeroSectionStyle from "./HerSection.module.css";

const HeroSection = () => {
  const { container } = globalStyle();
  const { container_hero_section, header_text, span_text } = HeroSectionStyle;
  return (
    <>
      <div className={clsx(container, container_hero_section)}>
        <div>
          <h1 className={header_text}>
            When <span className={span_text}>banking</span> meets{" "}
            <span className={span_text}>minimalist</span>
          </h1>
          <p className="text-3xl w-[37pc] font-semibold">
            A simpler banking experience for a simpler life
          </p>
          <button className="mt-4 text-[var(--primary-bg-color)]">
            Learn more ↓
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
