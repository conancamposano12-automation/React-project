import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import ProductCard from "../Components/ProductCard";

const Product = ({ addToCart, cart }) => {
  const products = [
    {
      id: 1,
      name: "17 pro",
      description: "Latest",
      price: 113000.0,
      stock: 100,
      type: "image",
      media: "/Images/17 pro.png",
    },
    {
      id: 2,
      name: "Apple Watch",
      description: "",
      price: 31000,
      stock: 25,
      type: "image",
      media: "/Images/Apple watch.png",
    },
    {
      id: 3,
      name: "Apple Charger",
      description: "Fast charger",
      price: 1000.0,
      stock: 100,
      type: "image",
      media: "/Images/Apple charger.png",
    },
    {
      id: 4,
      name: "Apple headphone",
      description: "High durability",
      price: 9000.0,
      stock: 50,
      type: "image",
      media: "/Images/Apple headphone.png",
    },
  ];

  // Count total quantity inside the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-24">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Our Products</h1>

        {/* Cart Button */}
        <Link
          to="/cart"
          className="relative flex items-center gap-2 rounded-lg bg-slate-700 px-5 py-3 text-white shadow-md transition hover:bg-slate-800"
        >
          <BiCart className="text-2xl" />

          <span className="hidden sm:inline">Cart</span>

          {/* Cart Quantity */}
          {cartItemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
};

export default Product;
