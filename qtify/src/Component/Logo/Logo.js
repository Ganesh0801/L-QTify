import React from "react";
import LogoImg from '../../asset/logo.png';
import styles from "./Logo.module.css"

const Logo=()=>{
    return(
        <div className={styles.logo}>
                <img src={LogoImg} alt="logo" width={67} height={34}/>
        </div>
     
    )
}
export default Logo