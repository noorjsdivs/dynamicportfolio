import { logo } from "@/public/assets";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        {/* ============ Logo Start here ============ */}
        <div>
          <Image className="w-14" src={logo} alt="logo" />
        </div>
        {/* ============ Logo End here ============== */}
        {/* ============ ListItem Start here ======== */}
        <div className="flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <li className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300">
              Home
            </li>
            <li className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300">
              <span className="text-textGreen">01.</span>
              About
            </li>
            <li className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300">
              <span className="text-textGreen">02.</span>
              Experience
            </li>
            <li className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300">
              <span className="text-textGreen">03.</span>
              Work
            </li>
            <li className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300">
              <span className="text-textGreen">04.</span>
              Contact
            </li>
          </ul>
          <button className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
            Resume
          </button>
        </div>
        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;
