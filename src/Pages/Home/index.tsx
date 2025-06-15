import Features_Section_Render from "../../Components/Featured_Section/Components/Features_Section_Render";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Operation_Section from "../../Components/Operations/Components/Operation_Section";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SureSection from "../../Components/Sure/SureSection";
import SidebarProvider from "../../Context/SidebarContext";
import Footer from "../../Layouts/Footer/Footer";
import { Header } from "../../Layouts/Header/Header";


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
