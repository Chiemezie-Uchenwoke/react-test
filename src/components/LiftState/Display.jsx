
const Display = ({title, count, setCount}) => {
    return (
        <div className="my-4 bg-blue-600 text-white py-8 px-6 flex flex-col gap-5 text-2xl">
            <h2>
                {title}
            </h2>

            <input 
                type="number"  
                className="border h-10 rounded-2xl px-3 outline-0"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
            />

            <p>
                Count Value: {count}
            </p>
        </div>
    )
};

export default Display;