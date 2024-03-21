import React from "react";
import style from "./headerSearch.module.css";





const HeaderSearch = () =>{
    return (
        <div className={style.headerSearch}>
        <input className={style.input} type="search" />
       </div>
    )
}

export default HeaderSearch;

