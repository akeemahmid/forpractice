// import  Image  from "next/image";
import { Carosel } from "@/components/carosel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Link from "next/link";



export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 4,
  })
 console.log(products);
 
  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl"> We to the Uchiha Clan </h2>
            <p>We are the strongest Uchiha to ever exist and we are unique</p>
            <Button asChild variant="default" className="container"
>
              <Link href="/products">Check all Products</Link>
            </Button>
          </div>
          <img alt="Banner image" width={450} height={450} src={products.data[0].images[0]} className="rounded-3xl"/>
        </div>
      </section>
      <section>
        <Carosel products={products.data}/>
      </section>
    </div>
  );
}
