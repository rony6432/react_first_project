 import {logourl} from "../utils/constant"
import { useState } from "react";
import {Link} from 'react-router-dom';
import { useOnline } from "../utils/useonline";
import { useSelector } from "react-redux";
//import { Grocery } from "./Grocery";
 export const Header= () =>{
     const [loginbtn,setloginbtn]=useState("login")
     const cartitem =useSelector((store)=> store.cart.items)
    return(
    <div className="flex justify-between bg-pink-100 shadow-lg">
           <div className="w-56">
              <img src={logourl}alt="logo"/>
           </div>
           <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    Online Status:{useOnline ? '✅':'🔴'}
                </li>
                <li className="px-4"><Link to='/'>Home</Link></li>
                <li className="px-4"><Link to='/about'>About</Link></li>
                <li className="px-4"><Link to='/contact'>Contact</Link></li>
                <li className="px-4"><Link to='/grogery'>Grocery</Link></li>
                <li className="px-4 font-bold text-xl"><Link to='/cart'>Cart({cartitem.length})</Link></li>
                <button className="login"
                onClick={()=>{
                    loginbtn==="login"?setloginbtn("logout"):setloginbtn("login")
                }}
                >{loginbtn}</button>
            </ul>
           </div>
    </div>
    );
};
