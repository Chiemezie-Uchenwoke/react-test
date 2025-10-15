import { Link } from "react-router";

const DashboardPage = () => {
    return (
        <div>
            <h1>This is the Dashboard Page</h1>

            <Link to={"/"} className="underline">Return Home</Link>
        </div>
    )
}

export default DashboardPage;