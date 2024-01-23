import {cloudurl} from "../utils/constant.js"
export const ResCard = (props) =>{
    console.log(props)
    const {name,cuisines,avgRating,sla,cloudinaryImageId}=props.resdata.info;
    return(
        <div className="res-card">
            <img className="res-logo" src=
            {cloudurl+cloudinaryImageId
        }
            alt='res'/>
            <h3>{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}minuits</h4>
        </div>
    )
 }