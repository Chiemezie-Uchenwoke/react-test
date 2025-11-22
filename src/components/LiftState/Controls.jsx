const Controls = ({count, setCount}) => {
    return (
        <div className="flex items-center gap-8 my-2">
            <button 
                className="bg-amber-400 py-3 px-10 rounded-2xl cursor-pointer active:translate-y-1 hover:brightness-95 duration-200"
                onClick={() => setCount(prev => prev + 1)}
            >
                Add
            </button>

            <button
                className="bg-amber-400 py-3 px-10 rounded-2xl cursor-pointer active:translate-y-1 hover:brightness-95 duration-200"
                onClick={() => setCount(prev => prev - 1)}
                disabled={count === 0}
            >
                Subtract
            </button>

            <button
                className="bg-amber-400 py-3 px-10 rounded-2xl cursor-pointer active:translate-y-1 hover:brightness-95 duration-200"
                onClick={() => setCount(0)}
            >
                Reset
            </button>
        </div>
    );
};

export default Controls;