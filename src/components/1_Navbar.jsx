import React from "react";
import Cart from "./4.2_Cart";

const Navbar = ({ total, inCarted, setCurrentTab }) => {
  return (
    <div className="fixed z-10 navbar flex items-center justify-around bg-base-100 shadow-sm shadow-[#F2F2F2]">
      <div className="inline-flex items-center justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-extrabold bg-clip-text text-transparent bg-linear-89  from-[#4F39F6] from-31% to-[#9514FA] to-99%">
          DigiTools
        </a>
      </div>

      <div className="hidden lg:flex">
        <ul className="navbar-center menu menu-horizontal px-1">
          <li>
            <a href="#premium-section" onClick={() => setCurrentTab(1)}>
              Products
            </a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-end">
        <div className="dropdown dropdown-end  gap-15">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-lg indicator-item font-extrabold bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% border-0 rounded-full">
                {inCarted?.length > 0 ? inCarted?.length : ""}
              </span>
            </div>
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{inCarted?.length} Items</span>
              <span className="text-info">Subtotal: ${total}</span>
              <div className={inCarted?.length > 0 ? "card-actions" : "hidden gap-2"}>
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => {
                    setCurrentTab(0);
                    document?.getElementById("premium-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  disabled={inCarted?.length === 0}
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
          <button className="btn btn-ghost">Login</button>
          <button className="btn-uiverse text-white bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% px-4 py-3 rounded-4xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
