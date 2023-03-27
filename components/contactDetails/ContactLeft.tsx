import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-1/3 font-titleFont flex flex-col gap-6">
      <p className="text-4xl font-semibold text-textLight">Get in touch!</p>
      <p className="text-xl md:text-3xl font-semibold bg-clip-text bg-gradient-to-l from-textGreen via-reactYellowLight to-green-400 text-transparent">
        Let us talk about your project
      </p>
      <p className="font-bodyFont text-base text-gray-300 font-medium">
        Thinking about a new project, a problem to solve, or just want to
        connect? Let us do it!
      </p>
      <p className="font-bodyFont text-base text-gray-300 font-medium">
        Use the form on this page or get in touch by other means.
      </p>
      <h1 className="text-xl tracking-wide text-gray-100 underline underline-offset-4 decoration-[1px] decoration-reactYellow">
        Contact Info
      </h1>
      <div className="flex flex-col gap-6 font-bodyFont">
        <div className="flex flex-col gap-2.5">
          <h2 className="uppercase text-lg font-medium text-textGreen">
            Anywhere:
          </h2>
          <p className="flex items-center gap-3 text-base text-zinc-300 hover:text-white hover:cursor-pointer transition-hover duration-300">
            <span className="text-reactYellow text-lg">
              <FaHome />
            </span>
            Lorem, ipsum dolor. <br />
            Placeat, minus.
          </p>
          <p className="flex items-center gap-3 text-base text-zinc-300 hover:text-white hover:cursor-pointer transition-hover duration-300">
            <span className="text-reactYellow text-lg">
              <MdMarkEmailUnread />
            </span>
            example@yourdomain.com
          </p>
          <p className="flex items-center gap-3 text-base text-zinc-300 hover:text-white hover:cursor-pointer transition-hover duration-300">
            <span className="text-reactYellow text-lg">
              <BsPhoneFill />
            </span>
            +11 0123456789
          </p>
          <p className="flex items-center gap-3 text-base text-zinc-300 hover:text-white hover:cursor-pointer transition-hover duration-300">
            <span className="text-reactYellow text-lg">
              <IoLogoWhatsapp />
            </span>
            +22 0123456789
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
