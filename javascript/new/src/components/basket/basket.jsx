import React from "react";
import style from "./basket.module.css"
import pictures from "./basket.png"

const Basket = () =>{
    return(
        <div className={style.basket}><img className={style.basket} src={pictures} alt="" /></div> 
    )
}

export default Basket