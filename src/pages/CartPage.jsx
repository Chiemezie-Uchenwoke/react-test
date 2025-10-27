import { Link } from "react-router";
import Cart from "../components/Cart/Cart";

const CartPage = () => {
    return (
        <>
         <Cart />
         <Link to={"/"} className="underline">Return Home</Link>
        </>
    )
};

export default CartPage;