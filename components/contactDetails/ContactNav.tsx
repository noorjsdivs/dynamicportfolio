import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactNav = () => {
  return (
    <div className="max-w-container mx-auto py-2 flex items-center justify-between">
      <Link href="/">
        <Image className="w-20" src={logo} alt="logo" />
      </Link>
      <a href="/assets/noor_resume.pdf" target="_blank">
        <button className="w-32 h-10 rounded-md text-textGreen text-base border border-textGreen hover:bg-hoverColor duration-300">
          Resume
        </button>
      </a>
    </div>
  );
};

export default ContactNav;
