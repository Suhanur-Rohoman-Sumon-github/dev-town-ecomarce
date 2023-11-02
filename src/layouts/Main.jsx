import { useState } from "react";
import { categoryData } from "../data/category";
import useCategoryData from "../hooks/useCategoryData";
import useAllProducts from "../hooks/useAllProducts";
import MapData from "../compononets/MapData";


const Main = () => {
    const categoryDatas = categoryData
    const alldata = useAllProducts()
    const [datas,setDatas] = useState()
    const categoryDataes = useCategoryData({category:datas})
    console.log(categoryDataes)
    return (
        <div className="">
        <div className="grid h-10 flex-grow card bg-base-300 rounded-box place-items-center ">

        </div>
        <div className="grid h-6 flex-grow card bg-base-300 rounded-box place-items-center mt-4">

        </div>
            <div className="md:flex w-full py-10 ">
                <div className="grid h-20   card  rounded-box  md:w-[20%]">
                    {
                        categoryDatas.map((category,index) => <p onClick={()=>setDatas(category.name)} className="text-left" key={index}>{category.name}</p>)
                    }
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="  md:w-[80%]">
                    {
                       categoryDataes?datas ?<MapData datas={categoryDataes}/>:<MapData datas={alldata}/> :<p>loading ....</p>
                       
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;