import {cloudurl} from "../utils/constant.js"
export const ResCard = (props) =>{
    //console.log(props)
    const {name,cuisines,avgRating,sla,cloudinaryImageId}=props?.resdata?.info;
    return(
        <div className="res-card mr-3 my-3 p-4 w-[250px] h-[380px] rounded-lg bg-gray-100 hover:bg-slate-300">
            <img className="res-logo rounded-lg h-[140px] w-[240px]" src=
            {cloudurl+cloudinaryImageId
        }
            alt='res'/>
            <h3 className="font-bold py-4 text-lg">{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}minuits</h4>
        </div>
    )
 }