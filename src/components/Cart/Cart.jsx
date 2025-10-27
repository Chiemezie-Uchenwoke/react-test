import useCartStore from "../../store/cart";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import { Link } from "react-router";

const Cart = () => {
    const {cart, removeFromCart} = useCartStore();
    return (
        <div>
            <Link to={"/products"} className="underline">Product Page</Link>
            <h2 className="text-4xl text-blue-500 font-bold">Cart Page</h2>
            
            <h3>
                Total Items in Cart: {cart.length}
            </h3>

            <div className="flex flex-col gap-8">
                {
                    cart.map((item) => {
                        return (
                            <ItemsInCart 
                                key={item.id}
                                {...item}
                                onRemoveFromCart={() => removeFromCart(item.id)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart;