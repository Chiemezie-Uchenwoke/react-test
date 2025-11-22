import {useState } from "react";
import Display from "./Display";
import Controls from "./Controls";

const ParentComp = () => {
    const [count, setCount] = useState("");

    return (
        <div>
            <Display 
                title={"Practicing Lifting State in React"}
                count={count}
                setCount={setCount}
            />

            <Controls 
                setCount={setCount}
                count={count} 
            />
        </div>
    )
}

export default ParentComp;