import maskot from "./assets/maskot.gif";
import text1 from "./assets/textPixel.png";
import helloWorld from "./assets/textPixel-helloWorld.png";
import boysWithDream from "./assets/textPixel-boysWithDream.png";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Tech from "./components/tech";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function App() {
  textAnim();
  return (
    <div className="app w-full md:w-[70em] mx-auto border-x-[3px] border-dark bg-primary shadowContainer">
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
}

function textAnim() {
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
}
