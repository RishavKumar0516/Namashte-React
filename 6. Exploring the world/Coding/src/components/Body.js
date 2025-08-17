import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData";

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

  const handleSearch = (event)=> {
    const { value } = event.target;
    setSearchText(value);
    console.log(value);
    const filteredRestaurant = resList.filter((res)=> res.info.name.toLowerCase().includes(value.toLowerCase()));
    console.log("filteredRestaurant", filteredRestaurant);
    // setRestaurantList(filteredRestaurant);
  }

  return (
    <div className="body">
      <div className="search-box">
        <input placeholder="search a restaurant you want..." value={searchText} onChange={handleSearch} />
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
