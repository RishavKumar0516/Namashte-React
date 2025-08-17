import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable - useState Hook is used to create a state variable to store data and a function to update it.
  let [restaurantList, setRestaurantList] = useState(resList);
  let [showButton, setShowButton] = useState(true);
  const [searchText, setSearchText] = useState("");
  // Whenever state variable changes, react trigger a reconciliation cycle(re-render)
  console.log("Body component re-rendered");

  // Function to update the restaurant list based on the rating.
  const filterRestaurantList = () => {  
    const filteredRestaurant = restaurantList.filter(
      (res) => res.info.avgRating > 4.3
    );

    setRestaurantList(filteredRestaurant);
    setShowButton(false);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return (
    <h1>Looks like you are offline!! Please check your internet connection</h1>
  )

  const handleSearch = (event)=> {
    const { value } = event.target;
    setSearchText(value);
    console.log(value);
    // const filteredRestaurant = resList.filter((res)=> res.info.name.toLowerCase().includes(value.toLowerCase()));
    // console.log("filteredRestaurant", filteredRestaurant);
    // setRestaurantList(filteredRestaurant);
  }

  return (
    <div className="body mt-3">
<div className="flex gap-5 px-4 justify-between">
        <div className="flex items-center gap-2">
        <input className="border border-solid border-black px-2 py-1 rounded-lg" placeholder="search a restaurant you want..." value={searchText} onChange={handleSearch} />
        {/* <CiSearch className="p-4 bg-green-100 m-4" /> */}
        <button className="px-3 py-1 bg-green-100 flex items-center gap-1 rounded-lg" onClick={()=>{
    const filteredRestaurant = resList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    console.log("filteredRestaurant", filteredRestaurant);
    // setRestaurantList(filteredRestaurant);
        }}><CiSearch />Search</button>
      </div>
      <div>
        {
          // Conditional Rendering - If the showButton is true, then the button will be displayed.
          showButton && (
            <button
              className="px-3 py-1 bg-gray-200 flex items-center gap-1 rounded-lg"
              onClick={filterRestaurantList}
            >
              Top Rated Restaurants
            </button>
          )
        }
      </div>
</div>
      <div className="flex flex-wrap justify-around items-stretch gap-5">
        {restaurantList.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/resturants/${restaurant.info.id}`}>
          <RestaurantCard
            restaurantData={restaurant}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
