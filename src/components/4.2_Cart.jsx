import { Suspense } from "react";
import CartItems from "./4.3_Cart_Items";

const Cart = ({ total, checkout, inCarted, setInCarted }) => {
  return (
    <Suspense
      fallback={
        <div className="w-full py-10 flex items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      }
    >
      <div className="bg[#D7C49E]/80 w-full">
        {inCarted.length > 0 ? (
          <div className=" w-full flex flex-col items-center bg-[#F2EDD7]/80 rounded-2xl gap-4 p-10 ">
            <h4 className="text-2xl font-bold mb-2">Your Cart</h4>
            {inCarted?.map((c, i) => (
              <CartItems key={i} inCarted_child={c} inCarted={inCarted} setInCarted={setInCarted}></CartItems>
            ))}
            <div className="flex justify-between w-full max-w-2xl px-4 mt-4 font-bold">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <button onClick={checkout}>Proceed to Checkout</button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 w-full">
            <h4 className="text-2xl font-bold mb-2">Your Cart</h4>
            <p className="opacity-70 text-lg">Your cart is empty.</p>
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default Cart;
