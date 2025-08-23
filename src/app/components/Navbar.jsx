"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  FaTruck,
  FaHeart,
  FaShoppingCart,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 bg-slate-50 px-6 py-4 flex items-center justify-between">
      {/* left section logo */}
      <div className="flex flex-col leading-tight">
        <span className="text-lg md:text-2xl font-bold text-[#a91f64]">
          sadev shop
        </span>
        <span className="text-sm text-gray-500 tracking-widest self-center">
          Erlectronic Shop
        </span>
      </div>
      {/* nav links - center section */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <Link href="/" className="hover:text-[#a01f64]">
            Home
          </Link>
        </li>
        <li className="hover:text-[#a01f64] cursor-pointer">New Arrival</li>
        <li className="hover:text-[#a01f64] cursor-pointer">Sallaries</li>
        <li>
          <Link href="/products" className="hover:text-[#a01f64]">
            Products
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-6 text-gray-700 text-xl">
        <div className="flex gap-6">
          <FaTruck className="hover:text-[#a01f64]" />
          <Link href="/wishlist">
            <FaHeart className="hover:text-[#a01f64]" />
          </Link>
          <Link href="/cart" className="">
            <FaShoppingCart className="hover:text-[#a01f64]" />
            {cartItemsCount > 0 && (
              <span className="absolute  -right-1 text-xs text-white bg-[#a91f64] rounded-full px-1.5 py-0.5 ">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
        {/* Menu icon */}
        <div className="md:hidden flex">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-2xl hover:text-[#a91f64] cursor-pointer" />
            ) : (
              <FaBars className="text-2xl hover:text-[#a91f64] cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 text-gray-700 font-medium md:hidden shadow-md">
          <li>
            <Link
              href="/"
              className="hover:text-[#a91f64]"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-[#a91f64]" onClick={toggleMenu}>
            New Arrivals
          </li>
          <li className="hover:text-[#a91f64]" onClick={toggleMenu}>
            Top Sellers
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-[#a91f64]"
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
