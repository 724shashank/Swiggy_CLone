import { useState, useEffect } from "react";
import { ImageUrl } from "../utils/constants";
import { useParams } from "react-router";
import ItemList from "./ItemList";

 const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [showMenu, setShowMenu] = useState(null);
  const { resID } = useParams();

  const api = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=${resID}`
      );
      const json = await res.json();
      setMenu(json);
    } catch (error) {
      console.error("Error Ecountered :", error);
    }
  };

  useEffect(() => {
    if (resID) {
      api();
    }
  }, [resID]);

  const { name, cuisines, areaName } =
    menu?.data?.cards[2]?.card?.card?.info || {};
  const categories =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {name || "Restaurant Name"}
        </h2>
        <p className="text-lg text-gray-600 mb-1">
          {cuisines?.join(", ") || "Cuisines not available"}
        </p>
        <p className="text-lg text-gray-500">
          {areaName || "Location not available"}
        </p>
      </div>

      <div>
        {categories.map((p, index) => (
          <ItemList
            indices={index}
            key={p.card.card.title}
            title={p.card.card.title}
            data={p.card.card.itemCards}
            showMenu={index === showMenu} // Checks if the current item is open
            setShowMenu={() =>
              setShowMenu((prevIndex) => (prevIndex === index ? null : index))
            }
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
