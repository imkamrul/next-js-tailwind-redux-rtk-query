import { ReactNode } from "react";

interface SidebarItem {
  name: string;
  path: string;
  icon: ReactNode;
  sabMenu?: boolean;
  list?: SidebarItem[];
}

// Define the type for the entire list
export interface SidebarListType extends Array<SidebarItem> {}
