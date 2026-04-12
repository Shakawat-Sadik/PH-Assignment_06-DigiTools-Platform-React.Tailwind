import { Suspense, use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const pricesPromise = async () => {
  const r = await fetch("/pricing.json");
  return r.json();
};
const xPrices = pricesPromise();
const Pricing = () => {
  const prices = use(xPrices);
  console.log(prices);
  return (
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <section id="pricing" className="w-[90vw] md:w-[80vw] flex flex-col items-center gap-5 md:gap-10 my-5 md:my-10 lg:my-15 px-8 md:px-20 lg:px-40">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-5xl font-extrabold">Simple, Transparent Pricing</h2>
          <p className="opacity-80 leading-5">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {prices.map(({ id, name, tagline, price, period, features, actionText, isPopular }) => (
            <div
              className={`relative flex flex-col items-center gap-6 text-[#755139] hover:text-white bg-[#F9FAFC] hover:bg-linear-89 hover:from-[#4F39F6] hover:to-[#9514FA] border-2 border-[#F2F2F2] rounded-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out p-6`}
            >
              {isPopular ? (
                <div className="absolute w-fit -top-5 rounded-3xl text-[#755139] bg-[#F2EDD7] px-3 py-1.5">Most Popular</div>
              ) : null}
              <div className="flex flex-col flex-1 w-full gap-3 md:gap-6">
                <div key={id} className="space-y- gap-4 md:gap-82">
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <p className="opacity-80 leading-5">{tagline}</p>
                </div>
                <div>
                  <span className="text font-bold-4xl">${price}</span>
                  <span className="text-xl">/{period}</span>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  {features.map((f) => (
                    <p className="inline-flex space-x-2">
                      <FontAwesomeIcon className="text-green-600" icon={faCheck} />
                      <span className="font-medium opacity-90 leading-5">{f}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full flex flex-col items-center bg-white rounded-4xl">
                <button className="w-full text-white hover:text-transparent hover:bg-clip-text bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% px-4 py-3 rounded-2xl">
                  {actionText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
};

export default Pricing;
//  text-[#755139]
