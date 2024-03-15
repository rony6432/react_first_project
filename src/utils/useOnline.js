import { useState,useEffect } from "react"
export const useOnline=()=>{
const[online,setonline]=useState(true);
useEffect( ()=>{
    window.addEventListener('offline',()=>{
        setonline(false);
    });
    window.addEventListener('online',()=>{
        setonline(true);
    });
} 
    ,[])
    return online;
}