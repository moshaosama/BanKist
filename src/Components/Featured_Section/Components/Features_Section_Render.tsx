import { AiOutlineStock } from "react-icons/ai";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { LuCreditCard } from "react-icons/lu";
import Featured_Section from "../Featured_Section";
import { globalStyle } from "../../../Styles";
import clsx from "clsx";
import IntroSection from "../../IntroSection/IntroSection";
import useSetAnimation from "../../../Hooks/useSetAnimation";

const Features_Section_Render = () => {
  const { hr } = globalStyle();
  const { isTransiton } = useSetAnimation(300);

  return (
    <>
      <div
        className={clsx(
          "transition-all duration-700",
          isTransiton
            ? "opacity-100 relative top-0"
            : "opacity-0 relative top-20"
        )}
      >
        <IntroSection
          Description="Everything you need in a modern bank and more"
          Header="Features"
        />
        <Featured_Section
          flexDirection=""
          Header="100% digital bank"
          Icon={<HiMiniComputerDesktop />}
          Image="digital.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eligendi reiciendis ratione mollitia aliquam ab ipsa neque soluta, debitis et!"
        />
        <Featured_Section
          flexDirection="row-reverse"
          Header="Watch your money grow"
          Icon={<AiOutlineStock />}
          Image="grow.jpg"
          description="Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim eveniet consequatur odit quam quos possimus assumenda dicta fuga inventore ab."
        />
        <Featured_Section
          flexDirection=""
          Header="Free debit card included"
          Icon={<LuCreditCard />}
          Image="card.jpg"
          description="Nesciunt quos autem dolorum voluptates cum dolores dicta fuga inventore ab? Nulla incidunt eius numquam sequi iste pariatur quibusdam!"
        />
        <hr className={clsx(hr, "my-20")} />
      </div>
    </>
  );
};

export default Features_Section_Render;
