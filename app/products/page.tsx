import { Allproduct} from "@/components/allProduct";
import { stripe } from "@/lib/stripe";

export default async function Products() {
   const products = await stripe.products.list({
    expand: ["data.default_price"]
  });
//  console.log(products);
    return(
        <div className="w-full text-center">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">The list of Uchihas</h1>
                <Allproduct products={products.data} />
           
        </div>
    ) 

    
}