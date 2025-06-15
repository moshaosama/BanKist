import { createContext, useContext, useState } from "react";
import type {
  SidebarContextProps,
  SidebarContextType,
} from "../Types/SidebarContextType";

const SidebarContext = createContext<SidebarContextType | null>(null);

const SidebarProvider = ({ children }: SidebarContextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, handleTriggerSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("Error!");
  }
  return context;
};
