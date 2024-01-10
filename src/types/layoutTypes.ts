import { ReactNode } from "react";

export interface SidebarItem {
  name: string;
  path: string;
  icon?: ReactNode;
  sabMenu?: boolean;
  list?: SidebarItem[];
  pageList?: string[];
}

// Define the type for the entire list
export interface SidebarListType extends Array<SidebarItem> {}
