import { Link } from "react-router";
import BarChart from "../components/MyChart/BarChart";
import LineChart from "../components/MyChart/LineChart";
import PieChart from "../components/MyChart/PieChart";

const DashboardPage = () => {
    return (
        <div>
            <h1>This is the Dashboard Page</h1>

            <Link to={"/"} className="underline">Return Home</Link>

            <div className="flex flex-col lg:flex-row gap-6">
                <BarChart />
                <LineChart />
                <PieChart />
            </div>
        </div>
    )
}

export default DashboardPage;