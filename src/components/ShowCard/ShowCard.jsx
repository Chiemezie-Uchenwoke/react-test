import MyCard from "./MyCard";
import { useState } from "react";

const ShowCard = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="bg-amber-200">
            <h1>This is the card</h1>

            <p>
                Count score is: {count}
            </p>

            <button onClick={() => setCount(count + 1)} className="bg-red-400 text-white">
                increase count
            </button>

            <MyCard title={"Hello Dear"} desc={"Testing React.Memo"} />
        </div>
    )
};

export default ShowCard;