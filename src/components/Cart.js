import {  useDispatch, useSelector } from "react-redux";
import { Listitem } from "./Listitem";
import {clearcart} from "../utils/Cartslice"

const Cart=()=>{
    const cartitems=useSelector((store)=>store.cart.items)
    dispatch=useDispatch();
    const handle=()=>{
        dispatch(clearcart())
    }
    return(
        <div className="p-4 m-4 text-center" >
            <h1 className="font-bold text-xl">cart</h1>
            <button className="font-bold text-xl bg-green-400 rounded-md text-white p-1"
            onClick={handle}>
                Remove
                </button>

            <div className="  w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <Listitem data={cartitems}/>
            </div>
        </div>
    )
}
 export default Cart