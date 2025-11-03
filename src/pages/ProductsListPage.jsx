import { Link } from "react-router";

import ProductList from "../components/ProductsSection/ProductList";

const ProductsListPage = () => {
    return (
        <>
            <Link to={"/"} className="underline">Home</Link>
            <ProductList />
        </>
    )
}

export default ProductsListPage;