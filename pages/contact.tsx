import ContactLeft from "@/components/contactDetails/ContactLeft";
import ContactNav from "@/components/contactDetails/ContactNav";
import FormTitle from "@/components/contactDetails/FormTitle";
import ServicesInput from "@/components/contactDetails/ServicesInput";
import ContactFooter from "@/components/ContactFooter";
import Footer from "@/components/Footer";

const contact = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-textLight px-4">
      <ContactNav />
      <div className="max-w-container mx-auto h-full bg-[#18181B] flex flex-col lgl:flex-row gap-10 p-4 lgl:p-10 rounded-md">
        <ContactLeft />
        <div className="w-full lgl:w-2/3 border-[1px] border-[#333333] relative after:absolute after:-right-2 after:top-2 after:w-2 after:h-full after:bg-zinc-700 after:inline-block before:w-full before:h-2 before:inline-block before:bg-zinc-700 before:absolute before:-bottom-2 before:left-2 pb--4">
          <FormTitle title="Your contact information" />
          <div className="px-4 py-5 flex flex-col gap-2 xl:gap-4">
            <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-2">
              <input
                className="contactInput"
                type="text"
                placeholder="First name"
              />
              <input
                className="contactInput"
                type="text"
                placeholder="Last name"
              />
              <input
                className="contactInput"
                type="email"
                placeholder="Email address"
              />
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-2">
              <input
                className="contactInput"
                type="text"
                placeholder="Phone number"
              />
              <input
                className="contactInput"
                type="text"
                placeholder="Company name"
              />
              <input
                className="contactInput"
                type="text"
                placeholder="Zip code"
              />
            </div>
          </div>
          <FormTitle title="What services do you need for your project?" />
          <div className="px-4 py-5 flex flex-col gap-4">
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <ServicesInput inputTitle="Website Development" />
              <ServicesInput inputTitle="Website Migration" />
              <ServicesInput inputTitle="E-commerce website" />
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <ServicesInput inputTitle="App Development" />
              <ServicesInput inputTitle="Domain/Hosting" />
              <ServicesInput inputTitle="SEO Solutions" />
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <ServicesInput inputTitle="Website Design" />
              <ServicesInput inputTitle="UI/UX Design" />
              <ServicesInput inputTitle="Graphic Designs" />
            </div>
          </div>
          <FormTitle title="How much is the anticipated budget?" />
          <form className="px-4 py-5 flex flex-col xl:flex-row items-center justify-between gap-4">
            <div className="w-full flex items-center gap-2 text-base">
              <input
                value="less than $1,000"
                type="radio"
                className="w-5 h-5 bg-zinc-200 cursor-pointer accent-reactYellow rounded-full"
              />
              <p>Less than $1,000</p>
            </div>
            <div className="w-full flex items-center gap-2 text-base">
              <input
                type="radio"
                className="w-5 h-5 bg-zinc-200 cursor-pointer accent-reactYellow rounded-full"
              />
              <p>$2,000 - $5000</p>
            </div>
            <div className="w-full flex items-center gap-2 text-base">
              <input
                type="radio"
                className="w-5 h-5 bg-zinc-200 cursor-pointer accent-reactYellow rounded-full"
              />
              <p>More than $5,000</p>
            </div>
          </form>
          <FormTitle title="Tell me about your project" />
          <div className="px-4 py-5 border-b-[1px] border-zinc-600 border-dashed">
            <textarea
              rows={4}
              className="w-full bg-zinc-800 resize-none p-2 placeholder:text-zinc-400 text-zinc-200 text-base outline-none rounded-md"
              placeholder="Project description"
            ></textarea>
          </div>
          <div className="px-6 pt-8 pb-6">
            <div className="w-48 h-12 bg-gradient-to-l from-yellow-500 via-white to-white relative group">
              <button className="w-48 h-12 bg-textGreen text-black font-titleFont font-semibold text-lg absolute -translate-x-2 -translate-y-2 transform group-hover:bg-reactYellow group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default contact;
