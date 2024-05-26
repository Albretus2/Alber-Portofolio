import { motion } from "framer-motion";
import maskot from "./assets/maskot.gif";
import text1 from "./assets/textPixel.png";
import helloWorld from "./assets/textPixel-helloWorld.png";
import boysWithDream from "./assets/textPixel-boysWithDream.png";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Tech from "./components/tech";
import Project from "./components/Project";
import Footer from "./components/Footer";
import noise from "./assets/noise.png";

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <DialogAnim />
      <EffectNoise />
      <Paper />
    </div>
  );
}

const EffectNoise = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translate(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: `url(${noise})`,
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[10%]"
    />
  );
};

const DialogAnim = () => {
  let count = 0;
  setInterval(() => {
    const img = document.querySelector(".textPixel");
    img.setAttribute("src", helloWorld);
    img.classList.add("animasiText");
    count = count + 1;

    if (count > 2) img.classList.remove("animasiText");

    if (count > 4) {
      img.setAttribute("src", text1);
      img.classList.add("animasiText");
    }
    if (count > 6) img.classList.remove("animasiText");

    if (count > 8) {
      img.setAttribute("src", boysWithDream);
      img.classList.add("animasiText");
    }
    if (count > 11) {
      img.classList.remove("animasiText");
      count = 0;
    }
  }, 3000);
};

const Paper = () => {
  return (
    <div className="paper lg:my-12 relative w-full md:w-[70em] mx-auto border-x-[3px] border-dark bg-primary shadowContainer">
      <Header />
      <main>
        {/* gif animasi */}
        <div className="coverImage relative">
          <img className="textPixel scale-0 w-16 lg:w-32 self-start top-8 right-[7.4rem]  lg:right-44 z-10  absolute transition ease-in-out duration-700" />

          <img src={maskot} className="w-24 lg:w-40 absolute right-10 top-3 " />
        </div>
        {/* profile info section */}
        <Profile />
        {/* tech section */}
        <Tech />
        {/* project section */}
        <Project />
      </main>
      <Footer />
    </div>
  );
};
