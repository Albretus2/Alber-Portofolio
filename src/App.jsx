import maskot from "./assets/hono.gif";
import text1 from "./assets/textPixel.png";
import helloWorld from "./assets/textPixel-helloWorld.png";
import boysWithDream from "./assets/textPixel-boysWithDream.png";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Tech from "./components/tech";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import noise from "./assets/noise.png";

export default function App() {
  return (
    <>
      <DialogAnim />
      <Paper />
    </>
  );
}

const Paper = () => {
  return (
    <div className="paper ">
      <Header />
      <main>
        {/* gif animasi */}
        <CoverProfile />
        {/* profile info section */}
        <Profile />
        {/* tech section */}
        <Tech />
        {/* project section */}
        <Project />
      </main>
      <Footer>
        <EffectNoise />
      </Footer>
    </div>
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

const CoverProfile = () => {
  return (
    <div className="coverImage relative overflow-hidden">
      <EffectNoise />
      <img className="textPixel scale-0 w-16 lg:w-32 self-start top-8 right-[7.4rem]  lg:right-48 z-10  absolute transition ease-in-out duration-700" />
      <img src={maskot} className="w-24 lg:w-48 absolute right-10 top-3 " />
    </div>
  );
};

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
