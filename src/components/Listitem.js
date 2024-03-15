 import {cloudurl} from "../utils/constant.js";
 import { useDispatch } from "react-redux";
 import { additem } from "../utils/Cartslice.js";
 export const Listitem=(data)=>{
    console.log(data);
    const dispatch=useDispatch()
    const handle=(d)=>{
        dispatch(additem(d))
    }
    return(
      
        <div>
            {data?.data?.map((d)=>
                //console.log(d.card.info.name)
              <div key={d?.card?.info?.id} className="p-2 m-2
               border-gray-200 border-b-2 text-left flex justify-between">
              
              <div className="w-9/12">
              <div className="py-2 ">
                <span>{d?.card?.info?.name} - ₹ {d?.card?.info?.price ? 
                d?.card?.info?.price/100 : 
                d?.card?.info?.defaultPrice/100}</span>
              </div>
              <div className="text-xs text-slate-500"> 
                {d?.card?.info?.description}
              </div>
              </div>
              <div className="w-3/12 p-4 relative">
                <div className="absolute bottom-0 right-16 shadow-lg">
                  <button className="bg-white  rounded-sm  p-2 text-[#60b246] font-bold "
                  onClick={()=>handle(d)}>
                    ADD+
                  </button>
                </div>
              <img src={cloudurl+d?.card?.info?.imageId} className="w-full"/>
              </div>
                 </div>
                 
            
            )}
        </div>
    )
 }