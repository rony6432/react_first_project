import { ResCard } from "./ResCard.js";
import { restaurants } from "../utils/mokdata.js";
import { useState } from "react";
 export const Body= () =>{
     const [resturent,setresturent]=useState(restaurants)
    return(
     <div className='body'>
         <button className="filter-btn"
         onClick={()=>{
          const filterres=resturent.filter(
            (res)=>{
              return res.info.avgRating>=4
            }
          );
          setresturent(filterres);
         }}>
            TopRatedResturant 
            </button>
         <div className="res-container">
          {
            resturent.map((res)=>(<ResCard key={res.info.id} resdata={res}/>)
            )
          }
         </div>
     </div>
    )
}