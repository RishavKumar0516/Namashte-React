import { useState, useContext, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import RestaurantCard, {withPromotedLabel, addPrompotedLabel} from "./ResturantCard";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { nThPrime } from "../utils/helper";
import UseRefTesting from "./UseRefTesting";

const Body = () => {
  // State Variable - useState Hook is used to create a state variable to store data and a function to update it.
  let [restaurantList, setRestaurantList] = useState(resList);
  let [showButton, setShowButton] = useState(true);
  const [searchText, setSearchText] = useState("");
  const {loggedInUser, setUserInfo} = useContext(UserContext);
  const [theme, setTheme] = useState("Light");
  // Whenever state variable changes, react trigger a reconciliation cycle(re-render)
  console.log("Body component re-rendered");
  let btnClickedCount = 0;


  // const ResturantPromptedCard = withPromotedLabel(RestaurantCard);

  const ResturantCardWithPromptedLabel = addPrompotedLabel(RestaurantCard);

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

    // doing heavy operations
  const prime = useMemo(()=> nThPrime(searchText), [searchText]);
  console.log("calculate the prime number", prime);

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
        <button className="px-4 py-2 bg-green-700 text-white rounded-lg" onClick={()=> setTheme(theme === "Light" ? "Dark" : "Light")}>{theme === "Light" ? "Dark" : "Light"}</button>

        {/* <button className="p-4 bg-gradient-to-b from red-200 via-5% to-yellow-200 m-4 rounded-lg" onClick={()=>{
          btnClickedCount = btnClickedCount + 1;
          console.log(btnClickedCount);
        }}>Click Me - {btnClickedCount}</button> */}
        <UseRefTesting /> 
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
        <input type="text" className="border border-black" value={loggedInUser} onChange={(e)=> setUserInfo(e.target.value)} />
      </div>
</div>
      <div className={`flex flex-wrap justify-around items-stretch gap-5 ${theme === "Light" ? "bg-gray-100" : "bg-gray-800"}`}>
        {restaurantList.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/resturants/${restaurant.info.id}`}>

          {/* if the resturant is promoted then add a promoted label to it. */}

          {restaurant.info.promoted ?
            <ResturantCardWithPromptedLabel
              restaurantData={restaurant}
            />
          :
          <RestaurantCard
            restaurantData={restaurant}
          />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
