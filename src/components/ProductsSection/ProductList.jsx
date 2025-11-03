import { useCallback, useMemo, useState } from "react";
import products from "../../data/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = useCallback((e) => {
        setSearchText(e.target.value);
    }, []);

    const filteredProducts = useMemo(() => {
        if (!searchText.trim()) return products;

        return products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
    }, [searchText]);

    return (
        <section>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <input 
                        type="search" 
                        placeholder="Filter..." 
                        className="border w-full max-w-80 h-10 rounded-2xl px-3"
                        value={searchText}
                        onChange={handleSearchTextChange}
                    />
                    <button    
                        className="bg-yellow-400 py-2 px-8 rounded-2xl font-medium cursor-pointer"
                        
                    >
                        Search
                    </button>
                </div>
                
                <div className="flex flex-col gap-4">
                    <h2 className="underline"> All our products </h2>

                    <div className="grid grid-cols-3 gap-8">
                        {
                            filteredProducts.map((product) => {
                                return (
                                    <ProductItem 
                                        key={product.id}
                                        {...product}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </section>
    )
}

export default ProductList;