import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./Cartslice"


const Appstore=configureStore({
    reducer:{
        cart:Cartreducer
    }
}
    )
export default Appstore;