import { globalStyle } from "../../../Styles";
import operation_intro_style from "../Modules/Operation_intro.module.css";
const Operation_Intro = () => {
  const { container, intro_content } = globalStyle();
  const { header_section } = operation_intro_style;
  return (
    <>
      <div className={container}>
        <div className={intro_content}>
          <h1 className={header_section}>Operations</h1>
          <p className="text-3xl font-bold">
            Everything as simple as possible, but no simpler.
          </p>
        </div>
      </div>
    </>
  );
};

export default Operation_Intro;
