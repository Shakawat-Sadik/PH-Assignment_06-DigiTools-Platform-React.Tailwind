import {Suspense} from "react";

const NavbarCart = ({total, checkout, inCarted, setInCarted}) => {
  return (
    <Suspense
      fallback={
        <div className="w-full py-10 flex items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      }
    >
      {inCarted.length > 0 ? (
        <div className="flex flex-col items-center gap-4 w-full">
          <h4 className="text-2xl font-bold mb-2">Your Cart</h4>
          {inCarted?.map((c, i) => (
            <Cart key={i} inCarted_child={c} inCarted={inCarted} setInCarted={setInCarted}></Cart>
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
    </Suspense>
  );
};

export default NavbarCart;
