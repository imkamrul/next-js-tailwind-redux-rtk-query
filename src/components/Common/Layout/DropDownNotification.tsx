import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NotificationIcon from "../Icons/NotificationIcon";

const DropdownNotification = () => {
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
        onClick={() => {
          setDropdownOpen(!dropdownOpen);
        }}
        href="#"
        className="relative flex h-[34px] w-[34px] items-center justify-center"
      >
        <NotificationIcon />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default  sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="p-3">
          <h5 className="text-sm font-medium ">Setting</h5>
        </div>
      </div>
    </div>
  );
};

export default DropdownNotification;
