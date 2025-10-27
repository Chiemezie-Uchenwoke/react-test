import { Link } from "react-router";
import Products from "../components/Products/Products";

const ProductsPage = () => {
    return (
        <>
            <Products />
            <Link to={"/"} className="underline">Return Home</Link>
        </>
    )
}

export default ProductsPage;