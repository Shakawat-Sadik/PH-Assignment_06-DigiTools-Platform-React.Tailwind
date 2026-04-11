import { Suspense, use, useState } from "react";
import Choice from "./4.1_Choice";
import Cart from "./4.2_Cart.jsx";

const promisedPackages = async () => {
  const res = await fetch("/subscription.json");
  return res.json();
};
const packages = promisedPackages();

const random = (r, x, y) => {
  const rand = Math.random() * r;
  const rand1 = Math.random() * x;
  const rand2 = Math.random() * y;
  let res;
  rand1 < 55 && 65 < rand2 ? (res = [Math.ceil(rand), Math.ceil(rand1), Math.ceil(rand2)]) : (res = [89, 31, 99]);
  return res;
};

const Premium = ({inCarted, setInCarted}) => {
  const sp1 = use(packages);

  console.log(inCarted);

  const [currentTab, setCurrentTab] = useState(1);

  return (
    <section>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-5xl font-extrabold">Premium Digital Tools</h3>
        <p className="w-150 text-center opacity-80 text-sm">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
        <div className="flex gap-4 my-4">
          <button
            onClick={() => setCurrentTab(1)}
            className={
              currentTab
                ? `btn-uiverse text-white bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% px-4 py-3 rounded-4xl`
                : `flex items-center gap-2.5 gradient-button border border-[#4F39F6] px-4 py-3 rounded-4xl`
            }
          >
            <span className={currentTab ? "" : "bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%"}>
              Products
            </span>
          </button>
          <button
            onClick={() => setCurrentTab(0)}
            className={
              currentTab
                ? `flex items-center gap-2.5 gradient-button border border-[#4F39F6] px-4 py-3 rounded-4xl`
                : `btn-uiverse text-white bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% px-4 py-3 rounded-4xl`
            }
          >
            <span className={currentTab && "bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%"}>
              Cart ({inCarted.length})
            </span>
          </button>
        </div>
      </div>
      {currentTab === 1 ? (
        <Suspense
          fallback={
            <div className="w-full py-10 flex items-center justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          }
        >
          <div className="grid grid-cols-3 gap-7.5">
            {sp1.map((c) => (
              <Choice key={c.id} sp1_child={c} random={random(120, 60, 100)} inCarted={inCarted} setInCarted={setInCarted}></Choice>
            ))}
          </div>
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="w-full py-10 flex items-center justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          }
        >
          <div className="flex flex-col items-center gap-4 w-full">
            <h4 className="text-2xl font-bold mb-2">Your Cart</h4>
            {inCarted.length > 0 ? (
              inCarted?.map((c, i) => <Cart key={i} inCarted_child={c} inCarted={inCarted} setInCarted={setInCarted}></Cart>)
            ) : (
              <p className="opacity-70 text-lg">Your cart is empty.</p>
            )}
            {inCarted.reduce(total, )}
          </div>
        </Suspense>
      )}
    </section>
  );
};

export default Premium;
