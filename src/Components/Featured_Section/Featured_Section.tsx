import clsx from "clsx";
import globalStyle from "../../Styles/global.module.css";
import Feature_Section from "./Featured_Section.module.css";
import type { Feature_Section_Props } from "../../Types/Feature_Section";
const Featured_Section = (props: Feature_Section_Props) => {
  const { container } = globalStyle;
  const { container_section, Icon } = Feature_Section;
  return (
    <>
      <div
        className={clsx(
          container,
          container_section,
          props.flexDirection === "row-reverse" ? "flex-row-reverse" : "flex",
          "max-sm:flex-col"
        )}
      >
        <div>
          <img
            src={props.Image}
            alt="Feature_Section_Image.png"
            className="w-[60pc] rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className={Icon}>
            <i>{props.Icon}</i>
          </div>
          <h1 className="text-xl font-bold">{props.Header}</h1>
          <p className="text-lg">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Featured_Section;
