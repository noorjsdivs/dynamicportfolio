import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="w-full py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="mt-16 flex gap-6">
        <a
          className="w-1/2 h-auto relative group"
          href="https://nextamazon.reactbd.com/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={amazonImg}
              alt="amazonImg"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-1/2 flex flex-col justify-between items-end text-right -ml-16 z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
          </div>
          <p className="bg-[#112240] p-6 rounded-md">
            An Amazon clone website for visualizing personalized Amazon website.
            View your products, Add your account with{" "}
            <span className="text-textGreen">O-auth</span> and then make the
            purchage using <span className="text-textGreen">stripe</span>.
          </p>
          <ul className="text-sm font-titleFont tracking-wide flex gap-5 text-textDark">
            <li>Nextjs</li>
            <li>Typescript</li>
            <li>Next-auth</li>
            <li>Stripe</li>
            <li>Vercel Deployment</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/noorjsdivs"
              target="_blank"
            >
              <TbBrandGithub />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://youtu.be/WzMtRfzkP-Q"
              target="_blank"
            >
              <AiOutlineYoutube />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://nextamazon.reactbd.com/"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
      {/* ============ project One End here ================== */}
      {/* ============ project Two Start here ================ */}
      <div className="mt-24 flex flex-row-reverse gap-6">
        <a
          className="w-1/2 h-auto relative group"
          href="https://www.noormohmmad.com/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={cyberImg}
              alt="cyberImg"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-1/2 flex flex-col justify-between items-end text-right z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Cyber Security Blog</h3>
          </div>
          <p className="bg-[#112240] p-6 rounded-md">
            A full functional Cyber Security Blog where you can view the latest
            post and <span className="text-textGreen">comments on</span> it by
            passing your ideas besides you can try to add your own{" "}
            <span className="text-textGreen">post</span> on it by logging on the
            portal.
          </p>
          <ul className="text-sm font-titleFont tracking-wide flex gap-5 text-textDark">
            <li>Nextjs</li>
            <li>Typescript</li>
            <li>Next-auth</li>
            <li>Sanity</li>
            <li>React Hook Form</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/noorjsdivs"
              target="_blank"
            >
              <TbBrandGithub />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://youtu.be/49Fx963su1I"
              target="_blank"
            >
              <AiOutlineYoutube />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://www.noormohmmad.com/"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
      {/* ============ project Two End here ================== */}
      {/* ============ project Three Start here ============== */}
      <div className="mt-24 flex gap-6">
        <a
          className="w-1/2 h-auto relative group"
          href="https://noorshop.netlify.app/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={noorShop}
              alt="noorShop"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-1/2 flex flex-col justify-between items-end text-right -ml-16 z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
          </div>
          <p className="bg-[#112240] p-6 rounded-md">
            An Amazon clone website for visualizing personalized Amazon website.
            View your products, Add your account with{" "}
            <span className="text-textGreen">O-auth</span> and then make the
            purchage using <span className="text-textGreen">stripe</span>.
          </p>
          <ul className="text-sm font-titleFont tracking-wide flex gap-5 text-textDark">
            <li>Nextjs</li>
            <li>Typescript</li>
            <li>Next-auth</li>
            <li>Stripe</li>
            <li>Vercel Deployment</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/noorjsdivs"
              target="_blank"
            >
              <TbBrandGithub />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://youtu.be/fi0nQc25xAw"
              target="_blank"
            >
              <AiOutlineYoutube />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://noorshop.netlify.app/"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
      {/* ============ project Three End here ================== */}
    </section>
  );
};

export default Projects;
