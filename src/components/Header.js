import logo from "/Asset/swiggy_logo.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();
    return (
      <div className="flex h-30 justify-between shadow-lg m-2 bg-orange-200">
        <div className="w-30">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex">
          <li className="px-4">Online Status{status===true?"🟢":"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/cart">Cart</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;