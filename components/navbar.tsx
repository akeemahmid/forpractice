"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [open, Setopen] = useState<boolean>(false);
  useEffect(() => {
    const grabsize = () => {
      if (window.innerWidth >= 760) {
        Setopen(true);
      }
    };
    window.addEventListener("resize", grabsize);
    return () => window.removeEventListener("resize", grabsize);
  }, []);
  return (
    <nav className="sticky top-0 z-50 shadow-2xl bg-gray-300">
      <div className="container mx-auto flex justify-between items-center px-4 py-5 ">
        <Link href="/" className="hover:text-shadow-amber-200">
          Uchiha{" "}
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/">Home </Link>
          <Link href="/products">Products </Link>
          <Link href="/about">About </Link>
          <Link href="/contact">Contact </Link>
          <Link href="/checkout">Checkout </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div>Cart</div>
          <Button
            variant="ghost"
            onClick={() => Setopen(!open)}
            className="md:hidden"
          >
            {open ? (
              <FaTimes className="h-6 w-6 text-red-700" />
            ) : (
              <HiMenu className="h-6 w-6 " />
            )}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center p-4 space-y-2">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-blue-600">
                Product
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};
