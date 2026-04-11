import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Cart from "./4.2_Cart";

const Choice = ({ sp1_child, random, inCarted, setInCarted }) => {
  const switchCases = (tag) => {
    switch (tag) {
      case "Best Seller":
        return "text-[#BB4D00] bg-[#FEF3C6]";
      case "Popular":
        return "text-[#4F39F6] bg-[#E1E7FF]";
      case "New":
        return "text-[#0A883E] bg-[#DBFCE7]";
      case "Professional":
        return "text-[#2A2A2C] bg-[#AFAFA8]";
      case "Developer Choice":
        return "text-[#2A2A2C] bg-[#AFAFA8]";
      case "Trending":
        return "text-[#2A8A2A] bg-[#FAFAFA]";
      default:
        return "text-[#F0EDCC] bg-[#02343F]";
    }
  };

  const [isClicked, setIsClicked] = useState(false);
  console.log(inCarted);
  const handleClick = () => {setIsClicked(true); setInCarted(prev => [...prev, sp1_child])};
  const [r, x, y] = random;
  const { id, name, description, price, period, icon, tag, features } = sp1_child;

  return (
    <section>
      <div key={id} id={`card${id}`} className="relative flex flex-col gap-4 m-4">
        <label htmlFor={`card${id}`} className={`absolute top-0.5 right-0.5 ${switchCases(tag)} rounded-4xl px-3 py-1.5`}>
          {tag}
        </label>
        <img src={icon} alt={name} className="h-20 w-20 p-3.5" />
        <h5 className="text-2xl font-bold">{name}</h5>
        <p className="font-normal leading-5">{description}</p>
        <div>
          <span className="text-2xl">${price}.99</span>
          <span className="">/{period}</span>
        </div>
        <div className="flex flex-col gap-2">
          {features.map((f, id) => (
            <p key={id}>
              <FontAwesomeIcon className="text-green-600" icon={faCheck} /> <span>{f}</span>
            </p>
          ))}
        </div>
        <button
          onClick={handleClick}
          style={{ backgroundImage: `linear-gradient(${r}deg, #4F39F6 ${x}%, #9514FA ${y}%)` }}
          className={`singleClick text-white px-4 py-3 rounded-4xl`}
        >
          {isClicked ? "In Your Cart Now" : "Shop it"}
        </button>
      </div>
    </section>
  );
};

export default Choice;

/* (div.relative.flex.flex-col.m-4>label.absolute.top-0.5.right-0.5.text-white.bg-#FEF3C6.rounded-lg.px-3.py-1.5+img+h5.text-2xl.font-bold+p.font-normal.leading-5+(div>span.text-2xl+span)+(div.flex.flex-col.gap-2>p*3)+btn)*6 */


/*

//Alternate Approach

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BuyListed from "./Deprecated-4.1.1_BuyListed";

const Choice = ({ sp1_child, random, inCarted, setInCarted }) => {
  const switchCases = (tag) => {
    switch (tag) {
      case "Best Seller":
        return "text-[#BB4D00] bg-[#FEF3C6]";
      case "Popular":
        return "text-[#4F39F6] bg-[#E1E7FF]";
      case "New":
        return "text-[#0A883E] bg-[#DBFCE7]";
      case "Professional":
        return "text-[#2A2A2C] bg-[#AFAFA8]";
      case "Developer Choice":
        return "text-[#2A2A2C] bg-[#AFAFA8]";
      case "Trending":
        return "text-[#2A8A2A] bg-[#FAFAFA]";
      default:
        return "text-[#F0EDCC] bg-[#02343F]";
    }
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {setIsClicked(true); setInCarted([...inCarted, sp1_child])};
  console.log(inCarted);

  return (
    <section>
      <BuyListed sp1_child={sp1_child} switchCases={switchCases} random={random} handleClick={handleClick} isClicked={isClicked} setIsClicked={setIsClicked}></BuyListed>
    </section>
  );
};

export default Choice;

*/