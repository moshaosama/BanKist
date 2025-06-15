import globalStyle from "../../Styles/global.module.css";
import type { IntroSectionStyleProps } from "../../Types/Intro_Section";
import globalSectionStyle from "./IntroSection.module.css";

const IntroSection = (props: IntroSectionStyleProps) => {
  const { container, intro_content } = globalStyle;
  const { header_section } = globalSectionStyle;
  return (
    <div className={container}>
      <div className={intro_content}>
        <h1 className={header_section}>{props.Header}</h1>
        <p className="text-3xl font-bold max-sm:w-fit ">{props.Description}</p>
      </div>
    </div>
  );
};

export default IntroSection;
