
import useAllProducts from "./useAllProducts";
const useCategoryData = ({ category}) => {
    const allProducts = useAllProducts()
    if (allProducts === null) {
        
        return null;
      }
    if (category === "All-Products") {
        return allProducts
    }
   
    else {
        const categores = allProducts.filter(categorys => categorys.category === category)
        
        return categores
    }
    
};

export default useCategoryData;