import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const [playClicked, setPlay] = useState(0);
  return (
    <section className="w-[80vw] flex flex-col-reverse lg:flex-row justify-center gap-4 md:gap-16.5 px-1 lg:px-5 my-3 md:my-15 py-1 md:py-4">
      <div className="flex flex-col justify-center items-center md:items-start">
        <label htmlFor="" className="w-fit flex items-center gap-2 rounded-4xl py-2 px-4 bg-[#E1E7FF]">
          <div className="border shadow-(--x) border-[#9514FA]/60 rounded-full">
            <div className="flex items-center justify-center w-2.5 h-2.5 bg-linear-89 from-[#4F39F6]/65 from-31% to-[#9514FA]/65 to-99% rounded-full">
              <div className="w-1.5 h-1.5 bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% rounded-full"></div>
            </div>
          </div>
          <span className="bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%">
            New: AI-Powered Tools Available
          </span>
        </label>
        <h1 className="text-7xl font-extrabold backdrop-opacity-90 leading-20 my-4">Supercharge Your Digital Workflow</h1>
        <p className="opacity-70 text-lg font-normal leading-5 mb-4">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          Explore Products
        </p>
        <div className="flex gap-4 my-4">
          <button
            className={`singleClick text-white hover:${`bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%`} bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% px-4 py-3 rounded-4xl`}
          >
            Explore Products
          </button>
          <button
            className="flex items-center gap-1.5 border gradient-button border-[#4F39F6] px-4 py-3 rounded-4xl"
            onClick={() => setPlay(playClicked === 0 ? 1 : 0)}
          >
            <FontAwesomeIcon className="text-[#4F39F6]" icon={faPlay} />
            <span className="bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%">Watch Demo</span>
          </button>
        </div>
        {playClicked === 1 && (
          <div id="vdo" className="flex justify-center m-8">
            <iframe
              width="320"
              height="240"
              src="https://www.youtube.com/embed/HMo7dcOiL78"
              title="BD তে Software Engineering Job পেতে DSA থেকে ঠিক কি কি শিখতে হবে?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="noopener noreferrer"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="flex flex-col shrink-0 justify-center">
        <img src="./src/assets/banner.png" alt="banner-image" />
      </div>
    </section>
  );
};

export default Banner;
