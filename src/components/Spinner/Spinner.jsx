import { useState, CSSProperties } from "react";
import { ScaleLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

            <button className="bg-yellow-400" onClick={() => setLoading(prev => !prev)}>
                Control loading state
            </button>

            <ScaleLoader
                color={"blue"}
                loading={loading}
                cssOverride={override}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Spinner;