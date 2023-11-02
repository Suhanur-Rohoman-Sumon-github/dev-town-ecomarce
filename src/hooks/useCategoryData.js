
import useAllProducts from "./useAllProducts";
const useCategoryData = ({ category,rating }) => {
    console.log(rating)
    const allProducts = useAllProducts()
    if (allProducts === null) {
        
        return null;
      }
    if (category === "All-Products") {
        return allProducts
    }
    if(rating){
        const categores = allProducts.filter(categorys => categorys.rating === rating)
        
        return categores
    }
    else {
        const categores = allProducts.filter(categorys => categorys.category === category)
        
        return categores
    }
    
};

export default useCategoryData;