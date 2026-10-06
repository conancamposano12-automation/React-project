import { BiTrash } from "react-icons/bi";

const Cart = ({ cart, setCart }) => {
  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );
  };

  // Delete product
  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Shipping fee
  const shippingFee = cart.length > 0 ? 150 : 0;

  // Calculate total
  const total = subtotal + shippingFee;

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold">My Cart</h1>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>

            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-white p-5 shadow-md"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    {/* Product Information */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.media}
                        alt={item.name}
                        className="h-24 w-24 rounded-lg object-cover"
                      />

                      <div>
                        <h2 className="text-lg font-bold capitalize">
                          {item.name}
                        </h2>

                        <p className="text-gray-500">
                          ₱{item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-xl font-bold transition hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="w-8 text-center font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-xl font-bold transition hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="font-bold">
                      ₱{(item.price * item.quantity).toFixed(2)}
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-2xl text-red-500 transition hover:text-red-700"
                      title="Remove product"
                    >
                      <BiTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-xl bg-white p-6 shadow-md">
              <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

              {/* Subtotal */}
              <div className="mb-4 flex justify-between">
                <span className="text-gray-600">Subtotal</span>

                <span className="font-semibold">₱{subtotal.toFixed(2)}</span>
              </div>

              {/* Shipping Fee */}
              <div className="mb-5 flex justify-between">
                <span className="text-gray-600">Shipping Fee</span>

                <span className="font-semibold">₱{shippingFee.toFixed(2)}</span>
              </div>

              <hr />

              {/* Total */}
              <div className="mt-5 flex justify-between text-xl font-bold">
                <span>Total</span>

                <span>₱{total.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button className="mt-6 w-full rounded-lg bg-slate-700 py-3 font-semibold text-white transition hover:bg-slate-800">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
