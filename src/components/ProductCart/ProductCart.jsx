import useCartCount from "../../hooks/useCartCount";

const ProductCart = () => {
    const {itemsInCart, inc, dec, emptyCart} = useCartCount();
    return (
        <div className="flex flex-col md:flex-row gap-8 my-8">
            <div className="product w-[calc(100%/3)]">
                <h2 className="product-heading">Product 1</h2>

                <button className="product-btn" onClick={inc}>
                    Add to cart
                </button>
            </div>

            <div className="product w-[calc(100%/3)]">
                <h2 className="product-heading">Product 2</h2>

                <button className="product-btn" onClick={inc}>
                    Add to cart
                </button>
            </div>

            <div className="bg-green-400 flex flex-col gap-4 py-8 px-4 lg:px-6 w-[calc(100%/3)]">
                <h2 className="product-heading">My Cart</h2>

                <p className="text-xl">
                    Total items in cart: {itemsInCart}
                </p>

                <button className="bg-black text-white py-3 px-8 cursor-pointer font-bold rounded-2xl active:scale-95" onClick={dec}>
                    Remove from cart
                </button>
                <button className="bg-black text-white py-3 px-8 cursor-pointer font-bold rounded-2xl active:scale-95" onClick={emptyCart}>
                    Empty cart
                </button>
            </div>
        </div>
    )
}

export default ProductCart;