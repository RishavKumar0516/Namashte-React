import { MdStarRate } from "react-icons/md";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="rounded-lg"
      />
      <div className="restaurant-details">
        <h3 className="font-bold py-4 text-lg">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>
        <div className="esa-rating">
          <h4 className="rating">
            <MdStarRate className="rating-logo" />
            <span>{avgRating}</span>
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} mins</h4>
        </div>
        <p className="cousine">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};


// Higher Order Component
// it will take the resturant card component as input and return the new enhanced component with adding the prompted label based on the data we have

// input - ResturantCard
// Output - ResturantCardPrompted

// it returns a component which is a piece of function that returns some piece of jsx.

// Higher Order Component is a pure function that takes a component as input and returns a new component it will not modify the code of the original component(component its taking as input). I am taking resturant card as input and using it how we use the resturant card. I am not modifying the resturant card features.

export const withPromotedLabel = (RestaurantCard) => {  //here we are receiving the component as input
   return (promps) => { //here we will receive the promps of the component.
      return (     // JSX of the new component
          <div>
            <label className="absolute bg-black text-white mt-2 mx-6 p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...promps} />  {/* it will pass all the props to the ResturantCard */}
          </div>
      )
   }
}

export default RestaurantCard;
