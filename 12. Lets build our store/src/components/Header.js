
import { FaCartArrowDown } from "react-icons/fa";
import {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatuse from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatuse();
  
  // react provide a hook called useContext to consume the context value
  const {loggedInUser} = useContext(UserContext);

  // selector -  this is a hook (hook at the end is a normal function) and this hooks comes from the react-redux package. we can use this hook to access the state of the store.
  // selector will give you access of whole store. but we want to subscribe the specific portion of the store.
  // here you need to scecific for which portion of the store you need to read/subscribe
  // as we want to read/subscribe the state of the cart, we need to use the cart.
  // now whenever my items will modify, my cart items will also modify 
  const cartItems = useSelector((store) => store.cart.items);



  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-56" src="../../../../assets/images/tasty-trails-logo.png" alt="Tasty Trails Logo" />
      </div>
      
      <div className="flex w-full justify-end items-center bg-pink-200 sm:bg-yellow-200">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart {cartItems?.length} items</Link></li>
          <li className="px-4 flex items-center">
          <div className="mr-1">

          <FaCartArrowDown  />
          </div>
          <button onClick={()=> {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
          }}>
            {btnNameReact}
          </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
