import HeroSection from "../../Components/HeroSection/HeroSection";
import { Header } from "../../Layouts/Header/Header";
import Features_Section_Render from "../../Components/Featured_Section/Components/Features_Section_Render";
import Operation_Section from "../../Components/Operations/Components/Operation_Section";
import SureSection from "../../Components/Sure/SureSection";
import Footer from "../../Layouts/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarProvider from "../../Context/SidebarContext";

export const Home = () => {
  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <Header />
      </SidebarProvider>
      <HeroSection />
      <Features_Section_Render />
      <Operation_Section />
      <SureSection />
      <Footer />
    </>
  );
};
