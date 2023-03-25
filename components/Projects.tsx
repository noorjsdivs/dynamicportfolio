import { amazonImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <div className="w-full py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="mt-16">
        <div className="w-1/2">
          <Image
            className="w-full h-80 object-contain"
            src={amazonImg}
            alt="amazonImg"
          />
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Projects;
