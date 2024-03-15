import { ResCard } from "./ResCard.js";
import { useState,useEffect } from "react";
import {Shimmers} from "./shimmer.js";
import {Link} from 'react-router-dom'
 export const Body= () =>{
     const [resturent,setresturent]=useState([]);
     const [fileredres,setfileredres]=useState([]);
     const [search,setserch] = useState("");
         useEffect(()=>{
          fetchdata()
         },[]);
      const fetchdata=async()=>{
          const data= await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
          const json =await data.json();
          setresturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          //console.log(json);
          setfileredres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        };
        
          if(resturent.length===0){
           return <Shimmers/> 
          }
         
    return(
     <div className=''>
        <div className="serch m-4 p-4 flex items-center rounded-lg border-r-2">
          <input type="text" className="serch-box border border-black border-solid" value={search}
          onChange={(e)=>{
             setserch(e.target.value);
          }}/>
          <button className="px-4 bg-green-100 m-4 py-2 rounded-lg " onClick={()=>{
           const filterres= resturent.filter((res)=>{
                   return res?.info?.name.toLowerCase().includes(search.toLowerCase());
           })
           setfileredres(filterres)
          }}>Serch</button>
          <button className="filter-btn flex p-4 py-2 bg-gray-100 rounded-lg"
         onClick={()=>{
          const filterres=resturent.filter(
            (res)=>{
              return res.info.avgRating>=4
            }
          );
          setfileredres(filterres);
         }}>
            TopRatedResturant 
            </button>
        </div>
         
         <div className="res-container flex flex-wrap">
          {
            fileredres.map((res)=>(<Link key={res.info.id}  to={'/resturent/'+res.info.id}><ResCard resdata={res}/></Link>)
            )
          }
         </div>
     </div>
    )
}