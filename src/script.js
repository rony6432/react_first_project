import React from 'react';
import  ReactDom  from 'react-dom/client';
import {Header} from './components/Header.js'
import {Body} from './components/Body.js'

//create header element

 


const Applayout = ()=>{
    return(
       <div className="App">
        <Header/>
        <Body/>
       </div>
    );
};

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<Applayout />);