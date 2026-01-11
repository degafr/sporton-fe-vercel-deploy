import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { useRouter } from "next/dist/client/components/navigation";

export const cartList = [
  {
    name: "Running Shirt",
    category: "Running",
    price: 150000,
    qty:2,
    imgUrl: "product-1.png",
  },
  {
    name: "Racket Pro",
    category: "Tennis",
    price: 250000,
    qty:3,
    imgUrl: "product-2.png",
  },
  {
    name: "Running Shoes",
    category: "Running",
    price: 630000,
    qty:1,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    qty:2,
    imgUrl: "product-4.png",
  },
];




const CartPopup = () => {
    const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
    const {push}= useRouter();
    const handlecheckout = () => {push("/checkout")}
    return (    
        <div className="absolute bg-white right-35 top-16 shadow-xl shadow-black/10 border border-gray-200 w-95 z-10">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
            Shopping Cart
            </div>
            {cartList.map((item, index) => (
                <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
                    <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                    <Image
                    src={`/images/products/${item.imgUrl}`}
                    width={63}
                    height={63}
                    alt={item.name}
                    className="aspect-square object-contain"
                    />
                    </div>
                    <div className="self-center">
                        <div className="text-sm font-medium">{item.name}</div>
                        <div className="flex gap-3 font-medium text-xs">
                            <div>{item.qty}x</div>
                            <div className="text-primary">{priceFormatter(item.price)}</div>
                        </div>
                    </div>
                    <Button size="small" variant="ghost"className="w-7 h-7 p-0! self-center ml-auto">
                        <FiTrash2 />
                    </Button>
                </div>
            ))}
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between font-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-xs">{priceFormatter(totalPrice)}</div>
                </div> 
                <Button variant="dark" size="small"className="w-full mt-4" onClick={handlecheckout} >
                    Checkout Now <FiArrowRight/>
                </Button>   
            </div>
        </div>
    )
    
}

export default CartPopup;