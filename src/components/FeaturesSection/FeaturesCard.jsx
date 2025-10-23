const FeaturesCard = ({title, text, cta, showModal}) => {
    return (
        <div 
            className="border py-8 px-6 flex flex-col gap-4 rounded-2xl cursor-pointer select-none"
            onClick={showModal}
        >
            <h2 className="font-bold text-3xl"> {title} </h2>

            <p>
                {text}
            </p>

            <button 
                className="bg-amber-400 py-3 px-8 border border-black/20 rounded-3xl my-3 active:scale-95 cursor-pointer hover:brightness-95"
                onClick={(e) => e.stopPropagation()}
            >
                {cta}
            </button>
        </div>
    )   
}

export default FeaturesCard;