import React from "react";
import style from "./top.module.css"
import pictures from "./bubles.png"



const Top = () =>{
    return(
       <div className={style.divtop}><img className={style.top} src={pictures} alt="" /></div> 
        
    )
}

export default Top;