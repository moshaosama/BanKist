import Featured_intro from "../../Components/Featured_intro/Featured_intro";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { Header } from "../../Layouts/Header/Header";
import Features_Section_Render from "../../Components/Featured_Section/Components/Features_Section_Render";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Featured_intro />
      <Features_Section_Render />
    </>
  );
};
