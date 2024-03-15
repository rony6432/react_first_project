import {lazy,Suspense } from 'react';
import React from 'react';
import  ReactDom  from 'react-dom/client';
import {Header} from './components/Header.js'
import {Body} from './components/Body.js'
import { About } from './components/About.js';
import {Contact} from './components/Contact.js';
import {Error} from './components/Error.js'
import {Menu} from './components/Menu.js'
import Cart from './components/Cart.js';
//import { useEffect} from 'react';
//import { Grocery } from './components/Grocery.js';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
 import Appstore from './utils/Appstore.js';
 import { Provider } from 'react-redux';
//create header element

    const Grocery= lazy(() => import('./components/Grocery.js'));


//console.log(Grocery)

const Applayout = ()=>{
    return(
        <Provider store={Appstore}>
       <div className="">
        <Header/>
        <Outlet/>
       </div>
       </Provider>
    );
};
const router=createBrowserRouter([
    {path:'/',
     element:<Applayout/>,
     children:[
        {
            path:'/',
            element:<Body/>
           },
        {
            path:'/about',
            element:<About/>
           },
           {
            path:'/contact',
            element:<Contact/>
           },
           {
            path:'/resturent/:id',
            element:<Menu/>
           },
           {
            path:'/cart',
            element: <Cart/>
           },
           {
            path:'/grogery',
            element: <Suspense fallback={<h1>Loding...</h1>}><Grocery/></Suspense>
           },
           
     ],
     errorElement:<Error/>
   },
   
])



const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);