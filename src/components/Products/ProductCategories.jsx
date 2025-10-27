import { memo } from "react";

const ProductCategories = ({categories, onCategoryClick, selectedCatg}) => {
    return (
        <>
            {
                categories.map((c, i) => {
                    return (
                        <button 
                            key={i} 
                            onClick={() => onCategoryClick(c)} 
                            className={`productBtn ${selectedCatg === c ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                        > 
                            {c}
                        </button>
                    )
                })
            }
        </>
    )
}

export default memo(ProductCategories);