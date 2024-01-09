import DropdownNotification from "./DropDownNotification";
import DropdownSetting from "./DropDownSetting";
import DropdownUser from "./DropwornUser";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-999  w-full backdrop-filter backdrop-blur-[10px]">
        <div className="border-y-[1px] border-[#EAECF0] px-6  h-[57px] flex justify-end items-center gap-x-[20px]">
          <DropdownSetting />
          <DropdownNotification />
          <DropdownUser />
        </div>
      </header>
    </>
  );
};

export default Header;
