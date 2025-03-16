import RestaurantCard, { PromotedCard } from "./ResCard";
import { useState, useContext } from "react";
import { restaurant } from "../utils/Mockdata";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filter, setfilter] = useState(restaurant);
  const [RestaurantList] = useState(restaurant);
  const [data, setData] = useState("");
  const status = useOnlineStatus(); // Custom hook

  const itemPerPage = 5;
  const [currPage, setCurrpage] = useState(0);
  const pages = Math.ceil(filter.length / itemPerPage);
  const start = currPage * itemPerPage;
  const end = start + itemPerPage;
  const arr = Array.from({ length: pages }, (_, i) => i);

  const { loggedUser, updateData } = useContext(UserContext);

  const handleClick = (z) => {
    setCurrpage(z);
  };

  const handleChange = (data) => {
    updateData(data);
  };

  if (!status) {
    return <h1>Looks like you are offline. Kindly connect to the Internet!</h1>;
  }

  return (
    <div className="m-2">
      <div className="flex m-2 p-2">
        <div className="Search" style={{ marginLeft: "10px" }}>
          <input
            className="border border-solid"
            type="text"
            placeholder="Search"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button
           data-testid="searchInput" className="px-4 py-0.5 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const search = RestaurantList.filter((item) =>
                item?.info?.name.toLowerCase().includes(data.toLowerCase())
              );
              setfilter(search);
            }}
          >
            Search
          </button>

          <button
            className="px-4 py-0.5 bg-gray-200 rounded-lg"
            onClick={() => {
              const filterData = RestaurantList.filter(
                (item) => item?.info?.avgRating >= 4.5
              );
              setfilter(filterData);
            }}
          >
            Ratings Above 4
          </button>

          <input
            className="font-black bg-red-600 m-4"
            type="text"
            value={loggedUser}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>

      {filter.length === 0 && <h2 className="text-center text-red-500">No results found</h2>}

      <div className="flex justify-between">
        {filter.slice(start, end).map((item) => (
          <Link key={item.info.id} to={`/menu/${item.info.id}`}>
            {item.info.promotion ? (
              <PromotedCard  resData={item.info} />
            ) : (
              <RestaurantCard  resData={item.info} />
            )}
          </Link>
        ))}
      </div>

      <div className="h-25 bg-gray-200 shadow-lg m-2 flex justify-center">
        {arr.map((x, index) => (
          <button
            className="font-bold text-2xl bg-orange-200 m-3 p-4"
            key={index}
            onClick={() => handleClick(x)}
          >
            {x + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Body;
