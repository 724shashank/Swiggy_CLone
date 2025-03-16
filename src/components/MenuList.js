import { ImageUrl } from "../utils/constants";
import { addItem, removeItem } from "../utils/Redux/CartSlice";
import { useDispatch } from "react-redux";

const MenuItem = ({ item, actionType, buttonText }) => {
  const { name, description, imageId, price } = item;
  const dispatch = useDispatch();

  const handleAction = () => {
    if (actionType === "ADD") {
      dispatch(addItem(item));
    } else {
      dispatch(removeItem(item));
    }
  };
  

  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4 shadow-sm hover:shadow-md transition duration-300 bg-white">
      <div className="flex-1 pr-4">
        <h2 className="text-left text-lg font-semibold text-gray-800">{name || "Item Name"}</h2>
        <p className="text-left text-sm text-gray-600 mt-1">{description || "No description available."}</p>
        <span className="text-left block text-green-600 font-bold mt-2">
          ₹{price / 100 || "Not Available"}
        </span>
      </div>

      <div className="flex flex-col items-center">
        {imageId && (
          <div className="w-24 h-24 mb-2">
            <img
              className="w-full h-full object-cover rounded-lg border border-gray-300"
              src={ImageUrl + imageId}
              alt={name || "Item"}
            />
          </div>
        )}
        <button
          className={`bg-green-500 text-white text-sm px-4 py-1 rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer`}
          onClick={handleAction}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// Default export for adding items
export const MenuList = ({ list }) => {
  return (<><MenuItem item={list} actionType="ADD" buttonText="Add" /></>)
};

// Named export for removing items
export const ClearList = ({ list }) => (
  <MenuItem item={list} actionType="REMOVE" buttonText="Remove" />
);

export default MenuList;