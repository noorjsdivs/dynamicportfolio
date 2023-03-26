const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-24 flex flex-col gap-8 px-4"
    >
      <h3 className="text-lg font-titleFont tracking-wide text-textGreen">
        Hi, my name is
      </h3>
      <h1 className="text-6xl font-titleFont font-semibold flex flex-col">
        Noor Mohammad.
        <span className="text-textDark mt-4">I build things for the web.</span>
      </h1>
      <p className="text-base max-w-[650px] text-textDark font-medium">
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem.{" "}
        <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
          Learn more
          <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
        </span>
        .
      </p>
      <button className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
        Check out my project!
      </button>
    </section>
  );
};

export default Banner;
