import type { ReactNode } from "react";

export interface SidebarContextType {
  isOpen: boolean;
  handleTriggerSidebar: () => void;
}

export interface SidebarContextProps {
  children: ReactNode;
}
