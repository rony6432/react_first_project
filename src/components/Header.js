 import {logourl} from "../utils/constant"
 export const Header= () =>{
    return(
    <div className="header">
           <div className="logo">
              <img src={logourl}alt="logo"/>
           </div>
           <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
           </div>
    </div>
    );
};
