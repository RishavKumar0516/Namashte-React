
import { FaCartArrowDown } from "react-icons/fa";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");


  // if no dependency array is passed, useEffect will be called on every render
  // if dependency array is empty = [] => useEffect will be called on initial render(just once).
  // if we pass dependency array with dependency = [btnNameReact] => useEffect will be called every time when dependency changes
  useEffect(()=>{
    console.log("Header component re-rendered");
  }, [btnNameReact]);


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="../../../../assets/images/tasty-trails-logo.png" alt="Tasty Trails Logo" />
      </div>
      
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><FaCartArrowDown /></li>
          <button onClick={()=> {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
          }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
