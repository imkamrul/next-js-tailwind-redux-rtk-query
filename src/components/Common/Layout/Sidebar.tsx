import { SidebarList } from "@/data/navbarData";
import LogoIcon from "../Icons/LogoIcon";
import MenuList from "./MenuList";

const Sidebar = () => {
  return (
    <>
      <aside
        className={`h-screen w-[260px] flex-col overflow-y-hidden  bg-[#F6F6F9]`}
      >
        <div className="bg-[#665BFF] w-full h-[57px] flex items-center gap-x-3 pl-4">
          <LogoIcon /> <p className="text-xl font-semibold text-white">CRM</p>
        </div>

        <ul className="px-4 flex flex-col gap-y-2 py-6">
          {SidebarList?.map((item, index) => {
            return <MenuList key={index} navItem={item} />;
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
