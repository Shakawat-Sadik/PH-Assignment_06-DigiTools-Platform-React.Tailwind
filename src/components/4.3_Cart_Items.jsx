import { toast } from "react-toastify";

const CartItems = ({ inCarted_child, inCarted, setInCarted }) => {
  const { id, name, price, icon } = inCarted_child;
  console.log(id);
  const handleRemove = () => {
    setInCarted(inCarted.filter((item) => item.id !== id));
    toast.info("Item removed from your cart.");
  };

  return (
    <div className="w-full max-w-2xl bg-[#D7C49E]/25 text-[#292826]/65 border-4 border-[#292826]/10 rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={icon} alt={name} className="h-16 w-16 p-2 bg-[#D7C49E]/40 rounded-lg shadow-sm" />
        <div className="flex flex-col text-left">
          <h5 className="text-xl font-semibold">{name}</h5>
          <p className="opacity-80 leading-5 text-sm">${price}</p>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="px-4 py-2 border-2 border-red-700 text-red-700 hover:bg-red-500 hover:text-white rounded-xl transition-all"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItems;

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
