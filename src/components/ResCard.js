import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { ImageUrl } from "../utils/constants"; 
import "../css/App.css";
const RestaurantCard = ({resData}) => {
const {loggedUser}=useContext(UserContext);

     return (
       <div data-testid="resCard" className="m-4 p-4 h-[400px] w-[265px] bg-gray-300 rounded-lg hover:bg-gray-400 ">
       <img className="rounded-lg"src={ImageUrl+resData.cloudinaryImageId} alt={resData.name}/> 
      <h4 className="font-bold py-1 text-l">{resData.name}</h4>
         <h3>{resData.costForTwo}</h3>
         <h4>{loggedUser}</h4>
       </div>
     );
   };

//Creating a Higher Order Component (Enhanced Component)

   const Promoted=(RestaurantCard)=>{
    return (props)=>{
     return (
     <div>
    
    <label className="absolute bg-black text-amber-50 rounded-lg m-0.5 p-0.5">Promoted</label>
    <RestaurantCard {...props} />
    
    </div>
     );
    };
    };
    
   export const PromotedCard = Promoted(RestaurantCard); //So here Promoted is our HOC and PromotedCard is the enhanced component produced by the HOC.
   export default RestaurantCard;