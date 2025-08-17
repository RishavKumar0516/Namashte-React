import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData";
import {
  SWIGGY_API_URL,
  SWIGGY_REST_API_PATH,
} from "../../../../public/common/constants";

const Body = () => {
  // State Variable - useState Hook is used to create a state variable to store data and a function to update it.
  let [restaurantList, setRestaurantList] = useState(resList);
  let [showButton, setShowButton] = useState(true);

  // const PROXY_URL = "https://corsproxy.io/?url=";

  async function fetchData() {
    try{
    const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.251075174674632&lng=77.47112073004246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    console.log("data", data);
    const json = await data.json();
    console.log("json", json);
    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    fetchData();
  }, [])

  // Function to update the restaurant list based on the rating.
  const filterRestaurantList = () => {  
    const filteredRestaurant = restaurantList.filter(
      (res) => res.info.avgRating > 4.3
    );

    setRestaurantList(filteredRestaurant);
    setShowButton(false);
  };

  return (
    <div className="body">
      <div className="search-box">
        <input placeholder="search a restaurant you want..." />
        <CiSearch className="search-icon" />
      </div>
      <div className="filter">
        {
          // Conditional Rendering - If the showButton is true, then the button will be displayed.
          showButton && (
            <button
              className="filter-btn"
              onClick={filterRestaurantList}
            >
              Top Rated Restaurants
            </button>
          )
        }
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
