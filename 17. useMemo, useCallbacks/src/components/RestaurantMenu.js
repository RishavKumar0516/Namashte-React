import React, {useState} from "react";
import resList from "../utils/mockData";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmer } from "./ShimmerUI";
import useResturantMenu from "../utils/useResturantMenu";

import resturantDetailData from "../utils/resturantDetailData";
import Resturantcategory from "../components/ResturantCategory";

const ResturantMenu = () => {
    // const [resturantData, setResturantData] = useState(null);
   const [showItems, setShowItems] = useState(false);
   const [showIndex, setShowIndex] = useState(0);
    const {resId} = useParams();

    const resInfo = useResturantMenu(resId);

let categories = resturantDetailData?.data?.cards[4]?.groupedCard?.cardGroupMap?.['REGULAR']?.cards || [];
categories = categories.slice(1);

    categories = categories.slice(0, categories.length - 2);

    console.log("categories", categories);

    if(!resInfo) return <RestaurantMenuShimmer />

    const {name, cuisines, costForTwo} = resInfo?.info || {};

    return (
       <div>
            <div className="max-w-[800px] min-h-[800px] mt-[20px] mb-0 mx-auto">
                 <h1 className="font-bold fw-bolder text-3xl">{name}</h1>
                 <p className="font-semibold">{cuisines?.join(", ")} - {costForTwo}</p>

               {categories?.map((category, index) => <Resturantcategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex} handleClick={() => setShowIndex(index === showIndex ? -1 : index)} />)}

            </div>
       </div>
   )
}


export default ResturantMenu;