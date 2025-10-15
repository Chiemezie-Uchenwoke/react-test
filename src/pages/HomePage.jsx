import Card from "../components/Card/Card";
import ProductCart from "../components/ProductCart/ProductCart";
import ShowSum from "../components/ShowSum/ShowSum";
import Header from "../components/Header/Header";

const HomePage = () => {
    return (
        <>
            <Header />
            <Card />
            <ProductCart />
            <ShowSum />
        </>
    )
}

export default HomePage;