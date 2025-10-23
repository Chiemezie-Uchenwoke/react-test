const ModalFeature = ({feature, onClose}) => {
    return (
        <div className="w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-black/60 z-50">
            <div className="bg-blue-500 text-white relative flex flex-col gap-4 w-80 py-8 px-6">
                <h2> {feature.title} </h2>

                <span 
                    className="text-xs font-bold underline absolute right-2 top-2 cursor-pointer"
                    onClick={onClose}
                >
                    Close Modal
                </span>

                <p>
                    {feature.text}
                </p>
            </div>
        </div>
    )
}

export default ModalFeature;