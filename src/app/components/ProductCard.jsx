import React from "react";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../lib/cartSlice";

const ProductCard = ({ id, image, text, price, category, inStock }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === id);

  const numericPrice =
    typeof price === "string"
      ? parseFloat(price.replace("$", "")) || 0
      : number(price) || 0;

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(
        addToCart({
          id,
          image,
          text,
          price: numericPrice,
          quantity: 1,
          category,
          inStock,
        })
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-visible flex flex-col h-[280px]">
      <div className="relative w-full h-[200px]">
        <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 pt-0 pb-4 m-0">
        {text}
      </h3>
      <div className="flex items-center justify-between px-4 pt-0 mt-0">
        <span className="text-xl font-bold text-gray-700">
          ${numericPrice.toFixed(2)}
        </span>
        <div className="flex space-x-3">
          <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer" />
          <FaShoppingCart
            className={`cursor-pointer ${
              isInCart ? "text-green-500" : "text-gray-600 hover:text-green-500"
            }`}
            onClick={handleToggleCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
