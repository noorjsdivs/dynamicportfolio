import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto py-12 lg:py-24 flex flex-col gap-12"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-2/3 text-base text-textDark font-bodyFont flex flex-col gap-6"
        >
          <p>
            Hello! My name is Noor Mohammad, and I’m passionate about crafting
            exceptional web experiences. My journey in web development began in
            2012 when I started experimenting with custom Tumblr themes, where
            building a custom reblog button sparked my love for HTML and CSS.
          </p>
          <p>
            Today, I’ve had the privilege of working at an{" "}
            <span className="text-textGreen">
              advertising agency, a startup, a major corporation, and a
              student-led design studio.
            </span>{" "}
            My diverse experiences have honed my skills in creating
            user-friendly, scalable, and visually appealing applications. I
            thrive on solving complex problems and bringing ideas to life on the
            internet.
          </p>
          <p>
            I’m constantly learning and adapting to new technologies to stay at
            the forefront of web development. My focus is on building seamless,
            performant, and accessible digital solutions.
          </p>
          <p className="font-titleFont font-semibold text-textLight">
            Here are some technologies I’ve been working with recently:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-3 mt-4">
            {[
              "JavaScript (ES6+)",
              "Next.js",
              "React",
              "Node.js",
              "TypeScript",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
            ].map((tech, index) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2 hover:text-textGreen transition-colors duration-300"
              >
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-1/3 h-80 relative group"
        >
          <div className="absolute w-full h-80 rounded-lg overflow-hidden shadow-navbarShadow">
            <img
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              src={"/assets/images/profile.png"}
              alt="Profile Image"
            />
            <div className="absolute inset-0 bg-textGreen/20 rounded-lg transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
          <div className="hidden lg:block absolute inset-0 border-2 border-textGreen rounded-lg -translate-x-3 -translate-y-3 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
