import { useRef } from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
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

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShow(false);
    }
  }
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        {/* ============ Logo Start here ============ */}
        <div>
          <Image className="w-14" src={logo} alt="logo" />
        </div>
        {/* ============ Logo End here ============== */}
        {/* ============ ListItem Start here ======== */}
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#home"
              onClick={handleScroll}
            >
              <li>Home</li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
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
        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen  bg-black bg-opacity-50 flex flex-col items-end"
          >
            <div className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative">
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <li>Home</li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
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
                <button className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
                  Resume
                </button>
                <div className="flex gap-4">
                  <a href="https://github.com/noorjsdivs" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialYoutube />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/Noorlalu143/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialFacebook />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/simplenoor143/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </a>
                </div>
              </div>

              <a
                className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                href="mailto:noor.jsdivs@gmail.com"
              >
                <p>reactbd@proton.me</p>
              </a>
            </div>
          </div>
        )}
        {/* ============== Small Icon End here ============= */}

        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;
