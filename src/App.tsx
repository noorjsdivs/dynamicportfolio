import About from "./components/About";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import Archive from "./components/Archive";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RightSide from "./components/RightSide";
import Container from "./components/Container";

function App() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </motion.div>
        <Container className="h-[88vh] mx-auto p-4">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Archive />
          <Contact />
          <Footer />
        </Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <RightSide />
        </motion.div>
      </div>
    </main>
  );
}

export default App;
