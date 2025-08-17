import {useEffect, useState} from "react";
import resList from "../utils/mockData";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmer } from "./ShimmerUI";


const ResturantMenu = () => {
    const [resturantData, setResturantData] = useState(null);
    const {resId} = useParams();

    useEffect(()=> {
        const data = resList.find((res) => res.info.id === resId);
        setResturantData(data);
        console.log("data", data);
    }, [resId]);

    if(!resturantData) return <RestaurantMenuShimmer />

    const {name, cuisines, costForTwo} = resturantData?.info || {};

    return (
       <div className="menu">
           <h1>{name}</h1>
           <p>
            {cuisines?.join(", ")} - {costForTwo}
           </p>
           <h2>Menu</h2>
           <ul>
               <li>Biryani</li>
               <li>Burgers</li>
               <li>Diet Coke</li>
           </ul>
       </div>
   )
}


export default ResturantMenu;