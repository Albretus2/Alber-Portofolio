import disctar from "./../assets/disctar.jpg";
import me from "./../assets/me.jpeg";
import me2 from "./../assets/me2.jpeg";
import troll from "./../assets/troll.gif";

const arrowSvg = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 13L4 11L16 11V9H18V11H20V13H18V15H16V13L4 13ZM14 17H16V15H14V17ZM14 17H12V19H14V17ZM14 7H16V9H14L14 7ZM14 7L12 7V5L14 5V7Z"
      fill="black"
    />
  </svg>
);

const curvesLine = (
  <svg
    className="inline"
    width="21"
    height="14"
    viewBox="0 0 21 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 0V13H21" stroke="black" strokeWidth="2" />
  </svg>
);

let count = 0;
const profileClick = () => {
  const p = document.querySelector(".profileImage");
  p.classList.add("animasiProfile");
  p.classList.remove("shadowHard");
  setTimeout(() => {
    p.classList.remove("animasiProfile");
    p.classList.add("shadowHard");
  }, 200);

  const img = p.querySelector("img");

  if (count == 0) {
    count++;
    img.setAttribute("src", me);
  } else if (count == 1) {
    count++;
    img.setAttribute("src", me2);
  } else if (count == 2) {
    count++;
    img.setAttribute("src", troll);
  } else if (count == 3) {
    count = 0;
    img.setAttribute("src", disctar);
  }
};

export default function Profile() {
  return (
    <section className="profile ">
      <div className="avatar flex ">
        <div
          className="profileImage w-28 h-28 lg:w-44 lg:h-44 border-[3px] border-dark mt-[-30px] lg:mt-[-80px] shadowHard transition-all"
          onClick={profileClick}>
          <img
            src={disctar}
            className="grayscale hover:grayscale-0 cursor-pointer  transition-all"
          />
        </div>
        <h3 className="block text-dark font-bold  px-5 py-2 lg:py-5 tracking-wide leading-6">
          <span className="uppercase lg:text-3xl font-bold">
            A. Ichvanius Giharta
          </span>
          <br />
          <span className="text-[12px] lg:text-sm opacity-50 italic">
            nickname : alberr
          </span>
        </h3>
      </div>
      <div className="info flex flex-wrap pt-8 pb-16 text-dark font-semibold">
        <BodyProfile />
        <div className="w-full lg:w-2/4 lg:ps-32 lg:mt-[-45px] flex flex-wrap flex-col gap-3">
          <h3 className="text-md lg:text-xl font-bold underline">
            Looking For me ?
          </h3>
          <ButtonInfo link="#" text="Download CV" />
          <ButtonInfo link="mailto:aichvan22@gmail.com" text="Email me" />
          <ButtonInfo
            link="#"
            text="Social media"
            // eslint-disable-next-line no-undef
            onClick={() => socialMedia.showModal()}
          />
        </div>
      </div>
      <ModalMedsos />
    </section>
  );
}

function BodyProfile() {
  return (
    <div className="lg:w-2/4 text-sm lg:text-lg mb-16 lg:mb-0">
      <span>
        Hi 👋🏻 , I&apos;m a{" "}
        <span className="italic underline">web developer</span> and also a{" "}
        <span className="bg-secondary">graphic designer</span> based in Bandung,
        Indonesia 📍. I&apos;m passionate about creating something unique and
        user friendly .
      </span>

      <span className="flex mt-4 gap-3 text-[11px] lg:text-sm">
        {curvesLine}
        <span>
          My design can be seen at
          <a
            href="https://www.instagram.com/dommy.exe/"
            target="_blank"
            className="opacity-50 hover:underline">
            @dommy.exe
          </a>
          ;
        </span>
      </span>
    </div>
  );
}

function ButtonInfo({ text, link, onClick }) {
  return (
    <a
      href={link}
      className="buttonInfo shadowHard transition ease-in-out  duration-200"
      onClick={onClick}>
      {text}
      {arrowSvg}
    </a>
  );
}

function ModalMedsos() {
  return (
    <dialog id="socialMedia" className="modal">
      <div className="modal-box mockup-code rounded-none px-[2px]   border-[3px] border-dark bg-secondary text-dark shadow-none shadowHard">
        <pre data-prefix="$" className="mt-5">
          <code>Instagram</code> /{" "}
          <a
            href="https://www.instagram.com/alberrrr_r/"
            target="_blank"
            className="opacity-50">
            @alberrrr_r
          </a>
        </pre>
        <pre data-prefix="$" className="mt-5">
          <code>Twiter</code> /{" "}
          <a
            href="https://x.com/BochiI1874293"
            target="_blank"
            className="opacity-50">
            @Stanley
          </a>
        </pre>
        <pre data-prefix="$" className="mt-5">
          <code>Github</code> /{" "}
          <a
            href="https://github.com/Albretus2"
            target="_blank"
            className="opacity-50">
            @Albretus2
          </a>
        </pre>
        <pre data-prefix="$" className="mt-5">
          <code>Linkedin</code> /{" "}
          <a
            href="https://www.linkedin.com/in/a-ichvanius-giharta-5011a0308/"
            target="_blank"
            className="opacity-50">
            @A. Ichvanius Giharta
          </a>
        </pre>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
