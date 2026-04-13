import { useCart } from "../context/CartContext";


export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex p-5 bg-yellow-300 justify-between">
      <h2>My Store</h2>
      <p className="ml-auto">Cart Items: {totalItems}</p>
    </div>
  );
}