import RestaurantCard,{PromotedCard}from "./ResCard";
import { useState } from "react";
import { restaurant } from "../utils/Mockdata";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [filter, setfilter] = useState(restaurant);
  const [RestaurantList] = useState(restaurant);
  const [data, setData] = useState("");
  const status = useOnlineStatus(); // Custom hook
  const itemPerPage = 5;
  const [currPage,setCurrpage] = useState(0) ; 
  const pages = filter.length/itemPerPage;
  const start= (currPage*itemPerPage);
  const end = (start+pages); 
  const arr = new Array(pages);
  //console.log([...arr.keys()]);
  
  const handleClick = (z)=>{
    setCurrpage(z);
  }
 


  

  if (status === false) {
    return (
      <>
        <h1>Looks like you are offline Kindly connect to Internet !!!</h1>
      </>
    );
  }

  return (
    <div className="m-2 ">
      <div className="flex m-2 p-2 ">
        <div className="Search" style={{ marginLeft: "10px" }}>
          <input
            className="border border-solid"
            type="text"
            placeholder="Search"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <button
            className="px-4 py-0.5 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const search = RestaurantList.filter((item) => {
                return (
                  item?.info?.name.toLowerCase().includes(data.toLowerCase()) ||
                  item?.info?.name.toUpperCase().includes(data.toUpperCase())
                );
              });
              setfilter(search);
            }}
          >
            Search
          </button>

          <button
            className="px-4 py-0.5 bg-gray-200 rounded-lg"
            onClick={() => {
              const filterData = RestaurantList.slice(start,end).filter(
                (item) => item?.info?.avgRating >= 4.5
              );
              setfilter(filterData);
            }}
          >
            Ratings Above 4
          </button>
        </div>
      </div>

      

      <div className="flex justify-between">
      
        {filter.slice(start,end).map((item) => {
          return (
            <Link key={item.info.id} to={"/menu/" + item.info.id}>
            
              
              {item.info.promotion?<PromotedCard resData={item}/>:<RestaurantCard resData={item}/>}
            </Link>
          );
        })}
      </div>
      <div className=" h-25 bg-gray-200 shadow-lg m-2 flex justify-center">
     {[...arr.keys()].map((x,index)=>
      <button className="font-bold text-2xl bg-orange-200 m-3 p-4 " key={index} onClick={()=>handleClick(x)}>{x}</button>
     )}
     </div>

    </div>
  );
};

export default Body;
