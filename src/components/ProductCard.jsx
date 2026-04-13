import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-300 p-5">
      <h3>{product.name}</h3>
      <p>Rs {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="text-white bg-black font-semibold p-4 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}