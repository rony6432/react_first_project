
import { useResmenue } from "../utils/useResmenue"
import { Shimmers } from "./shimmer"
import {useParams} from "react-router-dom"
import {ResCat} from "./ResCat"
import { useState } from "react"



export const Menu=()=>{
    const [ind,setind]=useState(null)
    //const [Menuitem,setMenuitem]=useState(null)
    const {id}=useParams()
    //console.log(id)
   const Menuitem=useResmenue(id)
    if(Menuitem===null)
    {
        return (<Shimmers/>)
    }
    const {name,cuisines,costForTwoMessage}=Menuitem[0]?.card?.card?.info;
    
    const catagori=Menuitem[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>{return c?.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log("HI")
    console.log(catagori)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(', ')} - {costForTwoMessage}</p>
        {catagori.map(
            (c,index)=>(<ResCat key={c?.card?.title}
                data={c?.card?.card}
                show={index===ind?true:false}
                setInd={()=>setind(index==ind?null:index)}
                />)
                
        )}
        </div>
    )
}