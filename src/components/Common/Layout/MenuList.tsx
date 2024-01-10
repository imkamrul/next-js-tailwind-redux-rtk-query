"use client";

import { SidebarItem } from "@/types/layoutTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DownArrowSideBarIcon from "../Icons/DownArrowSideBarIcon";
interface MenuListProps {
  navItem?: SidebarItem;
}
const MenuList = ({ navItem }: MenuListProps) => {
  const pathname = usePathname();

  return (
    <>
      {navItem?.sabMenu ? (
        <li className="group">
          <p
            className={`flex items-center gap-x-3 rounded px-2 py-3 transition-all ease-in-out delay-150  cursor-pointer  justify-between  duration-300 group  group-hover:text-[#665BFF] text-sm font-bold  ${
              //@ts-ignore
              navItem?.pageList.includes(pathname)
                ? " text-[#665BFF] active-side-nav"
                : "text-[#344054]"
            }`}
          >
            <span className="flex items-center  gap-x-3">
              {" "}
              <span> {navItem?.icon}</span>
              <span>{navItem?.name}</span>{" "}
            </span>

            <span
              className={`transition-transform duration-100  delay-100 ${
                //@ts-ignore
                navItem?.pageList.includes(pathname) ? "rotate-180" : ""
              }`}
            >
              <DownArrowSideBarIcon />
            </span>
          </p>
          <ul
            className={`ml-4 flex-col gap-y-2 mt-2  transition-all ease-in-out  duration-300 group-hover:opacity-100  group-hover:flex group-hover:w-auto  group-hover:h-auto ${
              //@ts-ignore
              navItem?.pageList.includes(pathname)
                ? "opacity-100 w-auto h-auto"
                : "opacity-0   w-0 h-0 hidden"
            }`}
          >
            {navItem?.list?.map((item, index) => {
              return <MenuList key={index} navItem={item} />;
            })}
          </ul>
        </li>
      ) : (
        <li className="cursor-pointer">
          <Link
            className={`flex items-center gap-x-3 rounded px-2 py-3 transition-all ease-in-out delay-150   hover:scale-105 hover:bg-[#E8E8FF] duration-300 group  hover:text-[#665BFF] text-sm font-bold  ${
              pathname === navItem?.path
                ? "bg-[#E8E8FF] text-[#665BFF] active-side-nav"
                : "text-[#344054]"
            }`}
            //@ts-ignore
            href={navItem?.path}
          >
            <span> {navItem?.icon}</span>
            <span>{navItem?.name}</span>
          </Link>
        </li>
      )}
    </>
  );
};

export default MenuList;
