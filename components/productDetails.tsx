import Stripe from "stripe";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}
export const ProductDetails = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-5">
      {/* ${(price.unit_amount / 100).toFixed(2)} */}
      <img
        src={product.images[0]}
        width={450}
        height={450}
        className="rounded-3xl"
      />
      {price && price.unit_amount && (
        <h3 className="font-bold text-shadow-white text-2xl text-shadow-lg">
          ${price.unit_amount / 100}
        </h3>
      )}
      <p className="text-lg mt-2">
        Sorry i'm kind of repeating the same word for {product.name} this is
        because i'm very tired and i dont know what to write again also i didn't
        really prepare .. i'm just using this to practice next and tailwind and
        also i dont really have a template i'm using
      </p>
      <div className="flex gap-3 items-center mt-4">
        <Button
          variant="outline"
          className="bg-black text-white text-2xl font-bold "
        >
          +
        </Button>
        <span>0</span>
        <Button
          variant="outline"
          className="bg-white text-black text-2xl font-bold shadow-2xl shadow-gray-400"
        >
          -
        </Button>
      </div>
    </div>
  );
};
