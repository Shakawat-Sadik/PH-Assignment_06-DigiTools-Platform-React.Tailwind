// import { useState } from "react";

const Cart = ({ inCarted_child, inCarted, setInCarted }) => {
  const { id, name, price, icon } = inCarted_child;
  console.log(inCarted_child);
  const handleRemove = () => {
    // Filter out the specific item from the cart
    setInCarted(inCarted.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="w-full max-w-2xl bg-[#E1E7FF]/20 border border-[#4F39F6]/20 rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={icon} alt={name} className="h-16 w-16 p-2 bg-white rounded-lg shadow-sm" />
        <div className="flex flex-col text-left">
          <h5 className="text-xl font-semibold">{name}</h5>
          <p className="opacity-80 leading-5 text-sm">${price}.99</p>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"
      >
        Remove
      </button>
    </div>
  );
};

export default Cart;

{
  /*
  <div key={id}>
      <h4 className="text-2xl">Your Cart</h4>
      <div className="flex items-center">
        <img src={icon} alt={name} className="" />
        <div>
          <h5 className="text-xl font-semibold">{name}</h5>
          <p className="opacity-80-leading-5">{price}</p>
        </div>
        <button onClick={}>Remove</button>
      </div>
    </div>
  */
}
