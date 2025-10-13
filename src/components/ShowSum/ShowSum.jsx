const ShowSum = () => {
    const calcSum = (a, b) => {
        return a + b;
    }

    const showName = () => {
        return "Chiemezie";
    }

    return (
        <div className="w-full max-w-[40rem] mx-auto bg-blue-600 text-white py-10 px-8 font-bold text-4xl">
            <h2>Result of sum is {calcSum(2, 3)}</h2>

            <p className="font-bold">
                {showName()}
            </p>
        </div>
    )
}

export default ShowSum;