import React from "react";

const Choice = ({ sp1 }) => {
  const switchCases = (tag) => {
    switch (tag) {
      case "Best Seller":
        "text-[#BB4D00] bg-[#FEF3C6]";
        break;
    case "popular":
        "text-[#4F39F6] bg-[#E1E7FF]";
        break;
    case "new":
        "text-[#0A883E] bg-[#DBFCE7]";
        break;
    case "new":
        "text-[#0A883E] bg-[#DBFCE7]";
        break;
    }
  };
  const choices = sp1;
  return choices.map(({ id, name, description, price, period, icon, tag, features }) => {
    <div key={id} id={`card${id}`} className="relative flex flex-col gap-4 m-4">
      <label
        htmlFor={`card${id}`}
        className={`absolute top-0.5 right-0.5 text-[#BB4D00] bg-[#FEF3C6] bg- rounded-4xl px-3 py-1.5`}
      >
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
        {features.map((f) => {
          <p>{f}</p>;
        })}
      </div>
      <button></button>
    </div>;
  });
};

/* (div.relative.flex.flex-col.m-4>label.absolute.top-0.5.right-0.5.text-white.bg-#FEF3C6.rounded-lg.px-3.py-1.5+img+h5.text-2xl.font-bold+p.font-normal.leading-5+(div>span.text-2xl+span)+(div.flex.flex-col.gap-2>p*3)+btn)*6 */
export default Choice;
