import React from "react";
import  ReactDOM from "react-dom";
import './style.css';
import Header from "./components/header/header.jsx"
import Category from "./components/category/category.jsx";
import Top from './components/content/top.jsx';





 const App = ()=> {
     return  (
        <>
   
     <div><Header/></div>
     <div><Top/></div> 

       <div><Category/></div> 
    </>)
    
     
 }
 
ReactDOM.render(<Header></Header>, document.querySelector('#header'));
ReactDOM.render(<Top></Top>, document.querySelector('#header'));
ReactDOM.render(<Category></Category>, document.querySelector('#header'));

export default App;
