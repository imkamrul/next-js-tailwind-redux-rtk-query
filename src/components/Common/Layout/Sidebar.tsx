import LogoIcon from "../Icons/LogoIcon";

interface SidebarProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: (arg: boolean) => void;
}
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <>
      <aside
        className={`h-screen w-[250px] flex-col overflow-y-hidden  bg-[#F6F6F9]`}
      >
        <div className="bg-[#665BFF] w-full h-[57px] flex items-center gap-x-3 pl-4">
          <LogoIcon /> <p className="text-xl font-semibold text-white">CRM</p>
        </div>
        <div className="px-3.5">
          <div className="flex flex-col gap-y-2 mt-4">
            <p className="text-[#665BFF] text-sm font-semibold">Dashboard</p>
            <p className="text-[#665BFF] text-sm font-semibold">Customers</p>
            <p className="text-[#665BFF] text-sm font-semibold">Invoices</p>
            <p className="text-[#665BFF] text-sm font-semibold">Estimates</p>
            <p className="text-[#665BFF] text-sm font-semibold">Payments</p>
            <p className="text-[#665BFF] text-sm font-semibold">Expenses</p>
            <p className="text-[#665BFF] text-sm font-semibold">Reports</p>
            <p className="text-[#665BFF] text-sm font-semibold">Settings</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
