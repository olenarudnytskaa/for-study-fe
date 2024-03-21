import React from "react";
import style from './profile.module.css';
import vector from './person-outline.png';
import Signin from "./signin/signin.jsx";



const Profile = () => {

    return <div className={style.profile} onClick={Signin} ><img className={style.profile}src={vector} alt="" ></img>
    {/* <Signin/>  */}
    </div>
}


export default Profile;