import React from "react";

const Steps = () => {
  return (
    <section className="flex flex-col items-center gap-5 md:gap-10 m-5 md:m-15">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h2 className="text-5xl font-extrabold">Get Started in 3 Steps</h2>
        <p className="opacity-80 leading-5">Start using premium digital tools in minutes, not hours.</p>
      </div>
      {/* div.grid.grid-cols-1.md:grid-cols-3.gap-4.md:gap-8>div.relative.flex.justify-center.items-center.p-2.md:p-6*3>div.absolute.-top-1.-right-1{0}+img.rounded-full.p-3.md:p-5+h4.text-2xl.font-bold+p.opacity-80.leading-5 */}
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="h-100 w-100 relative flex flex-col justify-center items-center gap-4 md:gap-6 border-2 border-[#F2F2F2] rounded-2xl p-2 md:p-6 hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <div className="w-5 md:w-10 h-5 md:h-10 absolute top-5 right-5 bg-linear-89 from-[#4F39F6] from-30 to-[#4F39F6] to-99 rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>

          <div className="bg-linear-89 from-[#4F39F6]/10 from-30 to-[#4F39F6]/10 to-99 rounded-full p-4 md:p-6">
            <img src="/src/assets/user.png" alt="user image" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <h4 className="text-2xl font-bold">Create Account</h4>
          <p className="text-center opacity-80 leading-5">Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className="h-100 w-100 relative flex flex-col justify-center items-center gap-4 md:gap-6 border-2 border-[#F2F2F2] rounded-2xl p-2 md:p-6 hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <div className="w-5 md:w-10 h-5 md:h-10 absolute top-5 right-5 bg-linear-89 from-[#4F39F6] from-30 to-[#4F39F6] to-99 rounded-full flex items-center justify-center text-white font-bold">
            2
          </div>
          <div className="bg-linear-89 from-[#4F39F6]/10 from-30 to-[#4F39F6]/10 to-99 rounded-full p-4 md:p-6">
            <img src="/src/assets/package.png" alt="package image" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <h4 className="text-2xl font-bold">Choose Products</h4>
          <p className="text-center opacity-80 leading-5">Browse our catalog and select the tools that fit your needs.</p>
        </div>
        <div className="h-100 w-100 relative flex flex-col justify-center items-center gap-4 md:gap-6 border-2 border-[#F2F2F2] rounded-2xl p-2 md:p-6 hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <div className="w-5 md:w-10 h-5 md:h-10 absolute top-5 right-5 bg-linear-89 from-[#4F39F6] from-30 to-[#4F39F6] to-99 rounded-full flex items-center justify-center text-white font-bold">
            3
          </div>
          <div className="bg-linear-89 from-[#4F39F6]/10 from-30 to-[#4F39F6]/10 to-99 rounded-full p-4 md:p-6">
            <img src="/src/assets/rocket.png" alt="rocket speed" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <h4 className="text-2xl font-bold">Start Creating</h4>
          <p className="text-center opacity-80 leading-5">Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
