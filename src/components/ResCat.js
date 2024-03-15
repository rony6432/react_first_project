
import { Listitem } from "./Listitem.js"


export const ResCat=({data,show,setInd})=>{
    //console.log(show)
    
    const handle=()=>{
        
        setInd()

    }
    return(
        <div className="  w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        
        <div className="flex justify-between cursor-pointer " onClick={handle}>
        <span className="font-bold text-lg">{data?.title}({data?.itemCards.length})</span>
         <span className="cursor-pointer">⬇️</span>
         </div>
         {show && <Listitem data={data?.itemCards}/>}
        
        </div>
    )
}
