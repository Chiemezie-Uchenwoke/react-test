import { memo } from 'react';

const ProductCard = memo(({image, price, description, title}) => {
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
        </div>
    )
});

export default ProductCard;