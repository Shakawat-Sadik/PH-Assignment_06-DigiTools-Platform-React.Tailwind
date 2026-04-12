const Featured = () => {
  return (
    <section id="featured" className="w-full flex flex-col text-white mt-5 md:mt-10 lg:mt-20 px-10 md:px-25 lg:px-50 bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% py-8 md:py-15 lg:py-30">
      <div className="w-full flex flex-col justify-center items-center gap-6 my-0 mx-auto">
        <h2 className="text-4xl font-extrabold text-white m-0 mb-2.5">
          Ready to Transform Your Workflow?
        </h2>

        <p className="text-[#e6e6e6] opacity-80 leading-5 m-0 text-center">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br/>
          Start your free trial today.
        </p>

        <div className="flex items-center gap-3 justify-center mt-3">
          <a href="#premium-section" className="rounded-4xl border-2 px-4 py-2 bg-white hover:scale-105 transition-all duration-150 hover:opacity-100">
            <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Explore Products</span>
          </a>

          <a href="#pricing" className="rounded-4xl border-2 px-4 py-2 border-white bg-transparent hover:scale-105 transition-all duration-150 text-white">
            View Pricing
          </a>
        </div>

        <p className="section-description text-[#e6e6e6] m-0 text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};
export default Featured;
