import { memo } from "react";

const ProductItem = ({name, price}) => {
    return (
        <div className="border rounded-2xl py-8 px-4 bg-blue-600 flex flex-col gap-4 hover:brightness-95 transition duration-200">
            <h3 className="text-white font-bold text-2xl"> {name} </h3>

            <p className="text-white">
                ${price}
            </p>
        </div>
    )
}

export default memo(ProductItem);