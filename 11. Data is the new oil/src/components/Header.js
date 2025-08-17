
import { FaCartArrowDown } from "react-icons/fa";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatuse from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatuse();


  // if no dependency array is passed, useEffect will be called on every render
  // if dependency array is empty = [] => useEffect will be called on initial render(just once).
  // if we pass dependency array with dependency = [btnNameReact] => useEffect will be called every time when dependency changes
  // useEffect(()=>{
  //   console.log("Header component re-rendered");
  // }, [btnNameReact]);


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
        </ul>
      </div>
    </div>
  );
};

export default Header;
