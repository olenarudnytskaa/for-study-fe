import React from "react";
import style from './category.module.css';

const Category = () =>{
    return <div className={style.main}>
        <div className={style.categories}>
        <h3 className={style.category}>Herz Kerzen</h3> 
        <h3 className={style.category}>Korpen Frau Kerzen</h3> 
        <h3 className={style.category}>Korpen Mann Kerzen</h3> 
        </div>
        <div className={style.items}></div>
  
    </div>
};

export default Category;