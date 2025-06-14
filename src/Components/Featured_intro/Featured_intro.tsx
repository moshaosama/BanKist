import { globalStyle } from "../../Styles";
import featureStyle from "./Featured_intro.module.css";
const Featured_intro = () => {
  const { container } = globalStyle();
  const { header_section } = featureStyle;
  return (
    <>
      <div className={container}>
        <div className="flex flex-col justify-start items-start w-[35pc] mx-auto">
          <h1 className={header_section}>Features</h1>
          <p className="text-3xl font-bold">
            Everything you need in a modern bank and more
          </p>
        </div>
      </div>
    </>
  );
};

export default Featured_intro;
