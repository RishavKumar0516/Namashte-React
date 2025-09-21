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
        // as in our case we are not able to use the swiggy api so we are using the mock data.
        const data = resList.find((res) => res.info.id === resId);
        console.log("data is fetched")
        setResInfo(data);
    }
    console.log("data is returned");
    return resInfo;
}

export default useResturantMenu