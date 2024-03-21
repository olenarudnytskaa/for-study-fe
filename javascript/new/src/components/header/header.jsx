import React from "react";
import style from './header.module.css';
import pictures from './variant1.png'
import HeaderSearch from "../search/headerSearch.jsx";
import Profile from "../profile/profile.jsx";
import Basket from "../basket/basket.jsx";



const Header = () => {

    return <div className={style.header}>
     
      <div  className={style.up}><div className={style.group}><HeaderSearch/><Profile/><Basket/></div></div> 
      <div className={style.header}><img className={style.header}src={pictures} alt="" />
      </div>
      </div>
       
}

export default Header;