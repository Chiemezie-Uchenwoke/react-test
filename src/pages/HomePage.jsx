import Card from "../components/Card/Card";
import ProductCart from "../components/ProductCart/ProductCart";
import ShowSum from "../components/ShowSum/ShowSum";
import Header from "../components/Header/Header";
import DoughnutChart from "../components/DoughnutChart/DoughnutChart";
import ShowCard from "../components/ShowCard/ShowCard";
import Numbers from "../components/Numbers/Numbers";

const HomePage = () => {
    return (
        <>
            <Header />
            <Card />
            <ProductCart />
            <DoughnutChart />
            <ShowSum />
            <ShowCard />
            <Numbers />
        </>
    )
}

export default HomePage;