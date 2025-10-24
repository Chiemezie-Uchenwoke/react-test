import Spinner from "../components/Spinner/Spinner";
import { Link } from "react-router";

const SpinnerPage = () => {
    return (
        <>  <Link to={"/"} className="underline">Return Home</Link>
            <Spinner />
        </>
    )
}

export default SpinnerPage;