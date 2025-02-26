import { ImageUrl } from "../utils/constants"; 
import "../css/App.css";
const RestaurantCard = ({resData}) => {
     return (
       <div className="m-4 p-4 h-[400px] w-[265px] bg-gray-300 rounded-lg hover:bg-gray-400 ">
       <img className="rounded-lg"src={ImageUrl+resData.info.cloudinaryImageId} alt="res-logo"/> 
      <h4 className="font-bold py-1 text-l">{resData.info.name}</h4>
         <h3>{resData.info.costForTwo}</h3>
         <h4>{resData.info.avgRating}</h4>
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