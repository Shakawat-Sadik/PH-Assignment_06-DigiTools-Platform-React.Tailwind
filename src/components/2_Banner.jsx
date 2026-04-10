import React from "react";
// import { PlayIcon } from "@phosphor-icons/react";
// mx-5 md:mx-12 lg:mx-45
const Banner = () => {
  return (
    <section className="w-[80vw] flex flex-col-reverse lg:flex-row justify-center gap-4 md:gap-16.5 px-1 lg:px-5 my-3 md:my-15 py-1 md:py-4">
      <div className="flex flex-col justify-center items-center md:items-start">
        <label htmlFor="" className="w-fit flex items-center gap-2 rounded-4xl py-2 px-4 bg-[#E1E7FF]">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect opacity="0.2" width="16" height="16" rx="8" fill="url(#paint0_linear_2_340)" />
            <rect opacity="0.4" x="2" y="2" width="12" height="12" rx="6" fill="url(#paint1_linear_2_340)" />
            <rect x="5" y="5" width="6" height="6" rx="3" fill="url(#paint2_linear_2_340)" />
            <defs>
              <linearGradient
                id="paint0_linear_2_340"
                x1="-5.10067"
                y1="8.91954"
                x2="16.009"
                y2="8.60591"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4F39F6" />
                <stop offset="1" stop-color="#9514FA" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2_340"
                x1="-1.8255"
                y1="8.68966"
                x2="14.0068"
                y2="8.45443"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4F39F6" />
                <stop offset="1" stop-color="#9514FA" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2_340"
                x1="3.08725"
                y1="8.34483"
                x2="11.0034"
                y2="8.22722"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4F39F6" />
                <stop offset="1" stop-color="#9514FA" />
              </linearGradient>
            </defs>
          </svg>
          <span className="bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%">
            New: AI-Powered Tools Available
          </span>
        </label>
        <h1 className="text-7xl font-extrabold backdrop-opacity-90 leading-20 my-4">
          Supercharge Your Digital Workflow
        </h1>
        <p className="opacity-70 text-lg font-normal leading-5 mb-4">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating
          faster today. Explore Products
        </p>
        <div className="flex gap-4 my-4">
          <button className={`btn-uiverse text-white hover:${`bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%`} bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% px-4 py-3 rounded-4xl`}>
            Explore Products
          </button>
          <button className="flex items-center gap-2.5 border gradient-button border-[#4F39F6] px-4 py-3 rounded-4xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.3195 8.67734L7.06328 1.79218C6.82722 1.64827 6.55721 1.56957 6.2808 1.56412C6.00439 1.55866 5.73148 1.62664 5.48992 1.76112C5.24837 1.8956 5.04682 2.09176 4.90585 2.32958C4.76488 2.56741 4.68953 2.83838 4.6875 3.11484V16.8851C4.68953 17.1616 4.76488 17.4326 4.90585 17.6704C5.04682 17.9082 5.24837 18.1044 5.48992 18.2389C5.73148 18.3733 6.00439 18.4413 6.2808 18.4359C6.55721 18.4304 6.82722 18.3517 7.06328 18.2078L18.3195 11.3226C18.5465 11.1845 18.7341 10.9902 18.8643 10.7586C18.9945 10.527 19.0628 10.2657 19.0628 9.99999C19.0628 9.73428 18.9945 9.47303 18.8643 9.24139C18.7341 9.00974 18.5465 8.8155 18.3195 8.67734ZM6.5625 16.3164V3.68359L16.8875 9.99999L6.5625 16.3164Z"
                fill="url(#paint0_linear_2_353)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_353"
                  x1="0.104758"
                  y1="10.9697"
                  x2="19.0721"
                  y2="10.7296"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4F39F6" />
                  <stop offset="1" stop-color="#9514FA" />
                </linearGradient>
              </defs>
            </svg>
            <span className="bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%">Watch Demo</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col shrink-0 justify-center">
        <img src="./src/assets/banner.png" alt="banner-image" />
      </div>
    </section>
  );
};

export default Banner;
