import { useCart } from "../context/CartContext";

export default function Cart() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="mt-6 ">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>

            {cart.length === 0 ? (
                <p className="text-red-500">Cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div
                        key={item.id}
                        className="mb-4 border p-4 rounded-lg shadow"
                    >
                        <h4 className="text-lg font-semibold">{item.name}</h4>

                        <p className="mb-2">
                            Rs {item.price} × {item.quantity}
                        </p>

                        <div className="flex items-center gap-3 mb-2">
                            <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded"
                            >
                                -
                            </button>

                            <span className="font-bold">{item.quantity}</span>

                            <button
                                onClick={() => increaseQuantity(item.id)}
                                className="px-3 py-1 bg-green-500 text-white rounded"
                            >
                                +
                            </button>
                        </div>

                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="px-4 py-1 bg-black text-white rounded"
                        >
                            Remove
                        </button>
                    </div>


                ))
            )}
            <div className="mt-6 p-4 border-t font-bold text-xl">
                Total Amount: Rs {totalAmount}
            </div>
        </div>
    );
}