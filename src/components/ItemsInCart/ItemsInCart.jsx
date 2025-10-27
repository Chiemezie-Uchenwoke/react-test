import { memo } from "react";

const ItemsInCart = ({image, title, description, onRemoveFromCart}) => {
    return (
        <div>
            <div className="w-full max-w-[15rem] h-16 overflow-hidden">
                <img src={image} alt={description} className="h-full object-contain" />
            </div>

            <h2> {title} </h2>

            <button className={`bg-amber-400 py-1 rounded-2xl active:scale-95 cursor-pointer text-xs`} onClick={onRemoveFromCart}>
                Delete from Cart
            </button>
        </div>
    )
};

export default memo(ItemsInCart);