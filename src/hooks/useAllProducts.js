import { useEffect } from "react";
import { useState } from "react";


const useAllProducts = () => {
    const [allProducts,setAllProducts] = useState(null)
    useEffect(()=>{
        fetch("products.json") 
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])
    return allProducts
};

export default useAllProducts;