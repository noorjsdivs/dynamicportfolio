import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
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
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#home"
              onClick={handleScroll}
            >
              <li>Home</li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
              href="#about"
              onClick={handleScroll}
            >
              <li>
                <span className="text-textGreen">01.</span>
                About
              </li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#experience"
              onClick={handleScroll}
            >
              <li>
                <span className="text-textGreen">02.</span>
                Experience
              </li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#project"
              onClick={handleScroll}
            >
              <li>
                <span className="text-textGreen">03.</span>
                Project
              </li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#contact"
              onClick={handleScroll}
            >
              <li>
                <span className="text-textGreen">04.</span>
                Contact
              </li>
            </Link>
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
