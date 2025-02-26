import { useState } from "react";
import MenuList from "./MenuList";
const ItemList = ({title,data}) => {
const [showMenu ,setShowMenu]= useState(false);
const handleClick = ()=>{
    setShowMenu(!showMenu)
}

return <>
<div className="text-xl text-center border-b-0.5 shadow-lg m-2 p-2  justify-between w-6/12 mx-auto rounded-x ">
<div className="flex justify-between hover:cursor-pointer" onClick={handleClick} >
    <h2 className="font-bold ">{title} ({data.length})</h2>
    <h2>🔽</h2>
</div>
{showMenu && 
<div className="w-auto">

{ data.map((d)=> <MenuList key={d.card.info.id} list={d.card.info}  />)}
</div>
}
</div>
</>
};

export default ItemList;
