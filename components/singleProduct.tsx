"use client";
// import Link from "next/link";
import Stripe from "stripe";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  product: Stripe.Product;
}

export const Singleproduct = ({ product }: Props) =>{
    return(
        <Link href={`/products/${product.id}`}>
        <div className="flex flex-col overflow-hidden  items-center justify-center gap-3 shadow-gray-600 shadow-2xl rounded-lg p-5 hover:bg-gray-200">
        <img src={product.images[0]} alt={product.name} className="w-fit h-45 md:h-80 rounded-lg"/>
        <h3 className="text-xl font-bold tracking-tight md:text-2xl">{product.name}</h3>
        <p className="text-left text-sm md:text-lg">{product.description}</p>
        <Button className="w-[100%] cursor-pointer">Know More</Button>
    </div>
        </Link>
    
)
}
