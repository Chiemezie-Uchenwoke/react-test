import { memo } from 'react';
import useCartStore from '../../store/cart';

const ProductCard = memo(({id, image, price, description, title, onAddToCart}) => {
    const {cart} = useCartStore();
    const isInCart = cart.some((item) => item.id === id);
    return (
        <div className='border py-8 px-4 flex flex-col gap-4'>
            <div className='w-full h-[12rem] overflow-hidden rounded-xl bg-gray-50'>
                <img src={image} alt={description} className='w-full h-full object-contain mix-blend-multiply' />
            </div>

            <h2 className='font-semibold text-xs'>
                {title}
            </h2>

            <span className='text-sm text-red-400 font-medium'>
                $ {price}
            </span>

            <button className={`bg-amber-400 py-1 rounded-2xl active:scale-95 cursor-pointer ${isInCart ? "brightness-75" : ""}`} disabled={isInCart} onClick={onAddToCart}>
                {isInCart ? "Added" : "Add To Cart"}
            </button>
        </div>
    )
});

export default ProductCard;