const getProducts = async () => {
    try {
        const url = "https://fakestoreapi.com/products";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (err){
        console.error(err);
        return null;
    }
};

export default getProducts;