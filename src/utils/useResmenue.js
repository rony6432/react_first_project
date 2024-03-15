import { useEffect,useState } from "react";
import { MENU_API } from "./constant";
export const useResmenue= (id)=>{
const [menue, setmenue]=useState(null);
    const resmenu=useEffect(()=>{
        featch();
   },[]);


   const featch = async()=>{
    const data=await fetch(MENU_API+id)
    const json=await data.json();
    //console.log(json.data)
    setmenue(json?.data?.cards)
    console.log(menue)

    
}

return menue;
}