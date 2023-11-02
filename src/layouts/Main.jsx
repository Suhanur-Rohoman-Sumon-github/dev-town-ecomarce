import { useState } from "react";
import { categoryData, ratingSortingData } from "../data/category";
import useCategoryData from "../hooks/useCategoryData";
import useAllProducts from "../hooks/useAllProducts";
import MapData from "../compononets/MapData";
import Marquee from "react-fast-marquee";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";


const Main = () => {
    const categoryDatas = categoryData
    const ratingSortingDatas = ratingSortingData
    const alldata = useAllProducts()
    const [datas, setDatas] = useState()
    const categoryDataes = useCategoryData({ category: datas })
    return (
        <div className="">
            <div className="grid h-10 flex-grow card bg-base-200 rounded-box place-items-center ">
                <Marquee>
                    <h1 className="text-success font-bold ml-8">get 25% discunt now harryup!!</h1>
                    <h1 className="text-success font-bold ml-8">get 25% discunt now harryup!!</h1>
                    <h1 className="text-success font-bold ml-8">get 25% discunt now harryup!!</h1>
                </Marquee>
            </div>

            <div className="flex  w-full py-10 ">

                <div className=" md:w-[20%]">
                    
                    <div className="">
                    <h1 className="text-left  text-2xl text-black font-bold">filter by category</h1>
                        {
                            categoryDatas.map((category, index) => <p onClick={() => setDatas(category.name)} className="text-left md:ml-8  cursor-pointer text-base  font-bold" key={index}>{category.name}</p>)
                        }
                    </div>
                    <div>
                        <h1 className="text-left  text-2xl text-black font-bold mt-4">sort  by ratings</h1>
                        <div className="">
                            {
                                ratingSortingDatas.map((rating, index) => <p className="text-left ml-8  cursor-pointer text-xl  font-bold" key={index}><Rating
                                placeholderRating={rating.rating}
                                emptySymbol={<FaRegStar /> }
                                placeholderSymbol={<FaStar className="text-yellow-500"/>}
                                fullSymbol={<FaStar />}
                                
                              /></p>)
                            }
                        </div>
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