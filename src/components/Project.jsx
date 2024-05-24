import mjsImage from "./../assets/mjs.jpg";
import bow from "./../assets/bowir.webp";
import moveDbImage from "./../assets/db.webp";

const cardProject = [
  {
    key: 1,
    title: "Mega Jasa Surya",
    body: " Mega Jasa Surya is a company profile website. provides powder couting services. which I created using javascript and tailwind",
    link: "https://mega-jasa-surya.vercel.app/",
    image: mjsImage,
  },
  {
    key: 2,
    title: "Battle of Wirwir",
    body: "Battle of wirwir is a simple game that I made using javascript vanilla + daisyui",
    link: "https://battle-of-wirwir.vercel.app/",
    image: bow,
  },
  {
    key: 3,
    title: "Movie DB",
    body: "A movie database website like IMDb, which I made using vanilla javascript and for the API I took from OMDb API ",
    link: "https://movie-db-roan.vercel.app/",
    image: moveDbImage,
  },
];

export default function Project() {
  return (
    <section className="project py-16 text-dark">
      <div className="titleProject gap-2 mb-10">
        <h3 className="text-xl font-bold text-center">What i have created</h3>
      </div>

      {/* cards */}
      {cardProject.map((card) => (
        <div className="cardo bg-secondary p-2 mb-5" key={card.key}>
          <div className="border-[3px] border-dark flex flex-wrap justify-between py-3 px-4">
            <div className="projectInfo lg:w-1/2  pt-2">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <div className="deskripsiProject flex flex-wrap  mt-3 gap-3  font-semibold text-sm ">
                <svg
                  className="hidden lg:inline-block"
                  width="13"
                  height="24"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0V13H21" stroke="black" strokeWidth="3" />
                </svg>
                <p className="lg:w-[30em] lg:mt-2">{card.body}</p>
              </div>
              <div className="demo flex mt-5 flex-wrap items-center gap-2 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 13L4 11L16 11V9H18V11H20V13H18V15H16V13L4 13ZM14 17H16V15H14V17ZM14 17H12V19H14V17ZM14 7H16V9H14L14 7ZM14 7L12 7V5L14 5V7Z"
                    fill="black"
                  />
                </svg>
                <a
                  href={card.link}
                  className="opacity-50 text-sm underline font-semibold"
                  target="_blank">
                  {card.link}
                </a>
              </div>
            </div>
            <img
              src={card.image}
              alt="megaJasaSurya"
              className="w-full  mt-5 lg:mt-0 lg:w-[25em] h-44 object-cover grayscale"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
