import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DownArrowIcon from "../Icons/DownArrowIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import SettingIconTwo from "../Icons/SettingIconTwo";
import UserIcon from "../Icons/UserIcon";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2"
        href="#"
      >
        <span className="block text-sm font-medium text-black">CRM..</span>

        <span className="cursor-pointer">
          <UserIcon />
        </span>

        <span
          className={`transition-transform duration-100  delay-100 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        >
          <DownArrowIcon />
        </span>
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-3 flex  flex-col rounded border border-stroke bg-white shadow min-w-[250px] ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke p-6">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3  font-medium duration-300 ease-in-out text-base hover:text-purple-700"
            >
              <ProfileIcon />
              My Profile
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3  font-medium duration-300 ease-in-out text-base hover:text-purple-700"
            >
              <SettingIconTwo />
              Account Settings
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <LogoutIcon />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DropdownUser;
