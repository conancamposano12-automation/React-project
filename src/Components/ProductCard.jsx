import { BiCartAdd } from "react-icons/bi";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <img
        src={product.media}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      {/* Product Information */}
      <div className="p-5">
        <h2 className="text-xl font-bold capitalize">{product.name}</h2>

        <p className="mt-2 text-gray-600">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-700">
            {product.price.toFixed(2)}
          </span>

          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        </div>

        {/* Add To Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-700 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          <BiCartAdd className="text-2xl" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
