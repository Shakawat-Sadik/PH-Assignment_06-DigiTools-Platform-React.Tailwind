import { use, useState } from "react";
import Choice from "./4.1_Choice";

const promisedPackages = async () => {
  const res = await fetch("/subscription.json");
  return res.json();
};

const packages = promisedPackages();

const Premium = () => {
  const sp1 = use(packages);
  console.log(sp1);
  const [currentTab, setToggleTab] = useState(true);

  // ${switchCases(tag)}

  return (
    <section>
      <div className="flex flex-col items-center">
        <h3 className="text-5xl font-extrabold">Premium Digital Tools</h3>
        <p className="opacity-80 text-sm">
          Choose from our curated collection of premium digital products designed to boost your productivity and
          creativity.
        </p>
        <div className="flex gap-4 my-4">
          <button
            id="ToggleButton1"
            onClick={() => setToggleTab(true)}
            className={
              currentTab
                ? `btn-uiverse text-white bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% px-4 py-3 rounded-4xl`
                : `flex items-center gap-2.5 gradient-button border border-[#4F39F6] px-4 py-3 rounded-4xl`
            }
          >
            <span
              className={
                currentTab
                  ? ""
                  : "bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%"
              }
            >
              Products
            </span>
          </button>
          <button
            id="ToggleButton2"
            onClick={() => setToggleTab(false)}
            className={
              currentTab
                ? `flex items-center gap-2.5 gradient-button border border-[#4F39F6] px-4 py-3 rounded-4xl`
                : `btn-uiverse text-white bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99% px-4 py-3 rounded-4xl`
            }
          >
            <span
              className={
                currentTab
                  ? "bg-clip-text text-transparent bg-linear-89 from-[#4F39F6] from-31% to-[#9514FA] to-99%"
                  : ""
              }
            >
              Cart ({})
            </span>
          </button>
        </div>
      </div>
      <div className="gird grid-cols-3 gap-7.5">
        <Choice sp1={sp1}></Choice>
      </div>
    </section>
  );
};

export default Premium;
