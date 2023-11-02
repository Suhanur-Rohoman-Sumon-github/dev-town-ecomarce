import { useState } from "react";
import { categoryData } from "../data/category";
import useCategoryData from "../hooks/useCategoryData";
import useAllProducts from "../hooks/useAllProducts";
import MapData from "../compononets/MapData";
import Marquee from "react-fast-marquee";


const Main = () => {
    const categoryDatas = categoryData
    const alldata = useAllProducts()
    const [datas, setDatas] = useState()
    const categoryDataes = useCategoryData({ category: datas })
    console.log(categoryDataes)
    return (
        <div className="">
            <div className="grid h-10 flex-grow card bg-base-200 rounded-box place-items-center ">
                <Marquee>
                    <h1 className="text-success font-bold ml-8">get 25% discunt now harryup!!</h1>
                    <h1 className="text-success font-bold ml-8">get 25% discunt now harryup!!</h1>
                    <h1 className="text-success font-bold ml-8">get 25% discunt now harryup!!</h1>
                </Marquee>
            </div>

            <div className="md:flex w-full py-10 ">

                <div className="grid h-20   card  rounded-box  md:w-[20%]">
                    <div>
                        <h1 className="text-left  text-2xl text-black font-bold">filter by category</h1>
                    </div>
                   <div className="mt-8">
                   {
                        categoryDatas.map((category, index) => <p onClick={() => setDatas(category.name)} className="text-left ml-8  cursor-pointer text-xl  font-bold" key={index}>{category.name}</p>)
                    }
                   </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="  md:w-[80%]">
                    {
                        categoryDataes ? datas ? <MapData datas={categoryDataes} /> : <MapData datas={alldata} /> : <p>loading ....</p>

                    }
                </div>
            </div>
        </div>
    );
};

export default Main;