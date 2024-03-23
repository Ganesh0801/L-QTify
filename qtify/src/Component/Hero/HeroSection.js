import React from 'react';
import styles from "./HeroSection.module.css";
import Headphone from "../../asset/headphones.png";

const HeroSection = ({heading1, heading2}) => {
  return (
    <div className={styles.container}>
         <div className={styles.hero}>
        <div>
             <h1>{heading1}</h1>
             <h1>{heading2}</h1>
        </div>
        
        <img
        alt='headphoneImg'
        src={Headphone}
        />

    </div>
    </div>
   
  )
}

export default HeroSection;