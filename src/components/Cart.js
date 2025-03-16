import {ClearList} from "./MenuList";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty. Add some delicious items! 🍔</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <ClearList key={item.id} list={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
