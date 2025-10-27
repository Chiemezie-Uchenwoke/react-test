import { useEffect, useState, useMemo, useCallback } from "react";
import getProducts from "../../apis/getProducts";
import ProductCard from "./ProductCard";
import ProductCategories from "./ProductCategories";
import useCartStore from "../../store/cart";

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const {addToCart, cart} = useCartStore();

    const fetchProducts = async () => {
        const data = await getProducts();
        if (data) {
            setAllProducts(data);
            setFilteredProducts(data);
    }
        }

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        console.log(allProducts)
    }, [allProducts]);

    const categories = useMemo(() => {
        const allCategories = allProducts.map(p => p.category);
        return [...new Set(allCategories)];
    }, [allProducts]);

    const handleCategoryClick = useCallback((catg) => {
        setSelectedCategory(catg);
        
        if (catg === "all") {
            setFilteredProducts(allProducts);
        } else {
            const filteredCategory = allProducts.filter(category => category.category === catg);
            setFilteredProducts(filteredCategory);
        }
    }, [allProducts]);

    if (!allProducts) return <h2>No Products</h2>;
    

    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-5xl text-blue-400 font-bold">Our Store</h2>

            <h3 className="text-2xl">
                Cart: {cart.length}
            </h3>

            <div className="w-full flex gap-4">
                <div className="w-[20%] h-[80vh] border flex flex-col items-start py-4 px-3 gap-3 overflow-auto">
                    <button className="productBtn bg-gray-200" onClick={() => handleCategoryClick("all")}>All</button>
                    <ProductCategories 
                        categories={categories}
                        onCategoryClick={handleCategoryClick}
                        selectedCatg={selectedCategory}
                    />
                </div>

                <div className="w-[80%] grid grid-cols-3 gap-8">
                    {
                        filteredProducts.map((p) => {
                            return (
                                <ProductCard 
                                    key={p.id}
                                    {...p}
                                    onAddToCart={() => addToCart(p)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products;