import { logoUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const status = useOnlineStatus();
  const {loggedUser} = useContext(UserContext);
  const cart = useSelector((store)=>store.cart.items)
  const [login,setLogin]=useState("login")

  const handleClick = ()=>{
 login==="login"?setLogin("loggedIn"):setLogin("login")
  }



    return (
      <div className="flex h-30 justify-between shadow-lg m-2 bg-orange-200">
        <div className="w-60">
          <img className="w-50 m-auto " src={logoUrl} alt="logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex">
          <li className="px-4">Online Status{status===true?"🟢":"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4 font-bold"><Link to="/cart">Cart - {cart.length}</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
           <button className="px-5  bg-gray-400 text-black rounded-lg cursor-pointer" onClick={handleClick}>{login}</button>
            <li className="px-4">{loggedUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;