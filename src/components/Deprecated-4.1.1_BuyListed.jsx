import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BuyButton from "./777_Bonus_BuyButton";

const BuyListed = ({ switchCases, sp1_child, random, handleClick, isClicked}) => {

  const { id, name, description, price, period, icon, tag, features } = sp1_child;
  return (
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
      <BuyButton handleClick={handleClick} isClicked={isClicked} random={random} price={price}></BuyButton>
    </div>
  );
};

export default BuyListed;
