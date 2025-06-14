import Featured_intro from "../../Components/Featured_intro/Featured_intro";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { Header } from "../../Layouts/Header/Header";
import Features_Section_Render from "../../Components/Featured_Section/Components/Features_Section_Render";
import Operation_Intro from "../../Components/Operations/Components/Operation_Intro";
import Operation_Section from "../../Components/Operations/Components/Operation_Section";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Featured_intro />
      <Features_Section_Render />
      <Operation_Intro />
      <Operation_Section />
    </>
  );
};
