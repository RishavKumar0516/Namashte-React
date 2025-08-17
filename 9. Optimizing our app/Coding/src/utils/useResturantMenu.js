import { useEffect, useState } from "react";
import resList from "../utils/mockData";
// understand it as what it is getting as input and what it is giving as output
const useResturantMenu = (resId ) => {
    // we can also create the state inside the custom hook.
    const [resInfo, setResInfo] = useState(null);

    // fetch data
    console.log("useResturantMenu called");

    useEffect(()=> {
        console.log("useResturantMenu useEffect called");
        fetchData();

    }, []);

    const fetchData = async () => {
        // fetch the data from the api and return the data to the component that is calling this hook.
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        // const json = await data.json();
        // setResInfo(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
        // as in our case we are not able to use the swiggy api so we are using the mock data.
        const data = resList.find((res) => res.info.id === resId);
        console.log("data is fetched")
        setResInfo(data);
    }
    console.log("data is returned");
    return resInfo;
}

export default useResturantMenu