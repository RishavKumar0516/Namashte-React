// import {useEffect, useState} from "react";
import resList from "../utils/mockData";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmer } from "./ShimmerUI";
import useResturantMenu from "../utils/useResturantMenu";


const ResturantMenu = () => {
    // const [resturantData, setResturantData] = useState(null);
    const {resId} = useParams();

    // inside the component we sould not worried about how this hook is fetching the data. we are trying to abstract the fetchdata logic and  put inside this hook. 
    // now resturant menu is only concerned about how to display menu on to the ui.
    // with using custom hook how to get the data is now abstracted.
    // hooks are nothing but a helper/utility funtion so we put this hooks inside the seperate folder named utils/helper
    // each custom hooks should be created in the seperate file, and name the file with exactly the same name of the hook.
    // whenever creating the hook always start with the word "use" in smallcase. That will help react to understand that this is a hook
    const resInfo = useResturantMenu(resId);
    // now after using the custom hook we can remove the useEffect hook and the fetchData function. Even we don't need to store the data in setResturantData state.

    // the difference b/w the senior and junior developer is he writes code.
    // don't only try to make the app working, your code should be clean, redable, light weight.

    // Their is no issue if you write the api calling logic here but if you write it in the custom hooks, That makes much more sense and make it more testable, because right now if we have to test the fetching data logic or we have any issue with fetching the data then I just have to test the useResturantMenu hook.


    if(!resInfo) return <RestaurantMenuShimmer />

    const {name, cuisines, costForTwo} = resInfo?.info || {};

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