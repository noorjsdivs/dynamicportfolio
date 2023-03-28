import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 group">
          <div className="flex justify-between items-center">
            <FaRegFolder className="text-4xl text-textGreen" />
            <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
          </div>
          <div>
            <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
              Educare Engligh Learning Academy
            </h2>
            <p className="text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              laudantium velit qui sint non, voluptates quo a veritatis.
            </p>
          </div>
          <ul className="text-sm text-textDark flex items-center gap-4">
            <li>Reactjs</li>
            <li>Tailwind CSS</li>
            <li>getform.io</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Archive;
