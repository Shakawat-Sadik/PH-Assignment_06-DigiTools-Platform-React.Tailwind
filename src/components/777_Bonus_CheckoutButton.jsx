import React from "react";

const CheckoutButton = ({ checkout }) => {
  return (
    <button
      onClick={checkout}
      className="relative flex items-center gap-1 bg-[#292826] px-9 py-4 border-4 text-[#D7C49E] text-base rounded-xl font-semibold border-[#D7C49E] cursor-pointer overflow-hidden transition-all ease-custom hover:text-[#292826]/80 hover:rounded-3xl group hover:transition-all duration-700 hover:duration-700"
    >
      <svg
        viewBox="0 0 24 24"
        className="absolute w-6 fill-[#D7C49E] z-9 transition-all duration-700 ease-custom -left-1/4 group-hover:left-4 group-hover:fill-[#292826]/80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <span className="relative z-1 transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3">
        Proceed to Checkout
      </span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-5 bg-[#F2EDD7]/90 rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-75 group-hover:h-75 group-hover:opacity-100" />
      <svg
        viewBox="0 0 640 640"
        className="absolute w-6 fill-[#D7C49E] z-9 transition-all duration-700 ease-custom right-4 group-hover:-right-1/4 group-hover:fill-[#292826]/80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
      </svg>
    </button>
  );
};

export default CheckoutButton;
