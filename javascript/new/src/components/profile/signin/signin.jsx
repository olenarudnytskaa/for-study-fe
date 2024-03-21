import React from "react";
import style from "./signin.module.css"

const Signin = () => {
    return <div className={style.signin}>
        <div className={style.login}><h6 className={style.h6}>Login</h6></div>
        <input className={style.name}type="text" />
        <div className={style.passwordname}><h6 className={style.h6}>Password</h6></div>
        <input className={style.password}type="text" />
        <button className={style.btnsignin}>Sign in</button>
    </div>
}

export default Signin;