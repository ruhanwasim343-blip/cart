
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

import Navbar from "../components/Navbar";
import { products } from "../data/Product";
export default function Home() {
  return (
    <div className="p-5">
      <Navbar/>

      <h1 className="font-bold mt-4 text-2xl text-center">Products</h1>

      <div className="flex gap-8 justify-center items-center mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Cart />
    </div>
  );
}