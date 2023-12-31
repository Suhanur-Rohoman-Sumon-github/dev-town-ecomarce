import useAllProducts from "../hooks/useAllProducts";


const Datas = ({category}) => {
    const allProducts = useAllProducts()
    if (allProducts === null) {
        
        return null;
      }
    if (category === "all-products") {
        return allProducts
    }
    else {
        const categores = allProducts.filter(categorys => categorys.category === category)
        return categores
    }
};

export default Datas;