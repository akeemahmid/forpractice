"use client";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
// import Image from "next/image";

// our aim here is to get access to the products so we need access to the stipe generated product
interface Props {
  products: Stripe.Product[];
}

export const Carosel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3100);
  }, [products.length]);
  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;
  return (
    <Card className="overflow-hidden relative rounded-lg shadow-2xl border-gray-200 mt-8">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full">
          <img
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            className="images"
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {currentProduct.name}
        </CardTitle>
        {price && price.unit_amount && <p className="font-bold text-shadow-white text-2xl text-shadow-lg">${price.unit_amount / 100}</p>}
      </CardContent>
    </Card>
  );
};
