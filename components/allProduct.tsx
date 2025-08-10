"use client";
// import Link from "next/link";
import Stripe from "stripe";
import { Singleproduct } from "./singleProduct";
import { useState } from "react";

interface Props {
  products: Stripe.Product[];
}

export const Allproduct = ({ products }: Props) =>{

    const [search, setSearch] = useState<string>("")
    const filterproduct = products.filter((product)=>{
        const checkLetters = search.toLowerCase()
        const theSame = product.name.toLowerCase().includes(checkLetters)
        const checkDescription = product.description ? product.description.toLowerCase().includes(checkLetters) : false;

        return theSame || checkDescription;
    })
return(
    <div>
        <div className="relative w-full h-30">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search me" className="w-full rounded-3xl font-semibold text-xl md:text-2xl border-2 p-5 outline-none"/>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-5">
    {filterproduct.map((product)=>(
        
       <div key={product.id}>
            <Singleproduct product={product}/>
       </div>
    ))}
</div>
    </div>
)
}