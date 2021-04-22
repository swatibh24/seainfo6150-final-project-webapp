import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}> 
            <img  className={styles.logo}  src="http://shoppopbox.com/wp-content/uploads/2017/09/homechef-logo-square-1.jpg"
              alt="recipes logo" />
            <p className={styles.text}> ©{new Date().getFullYear()} Home Made Recipes by Swati Bhojwani.</p>
        </div>
    )
};

export default Footer;