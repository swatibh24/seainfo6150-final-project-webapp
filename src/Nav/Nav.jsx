import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
    return(
        <nav>
          <Link to="/">
            <img
              className={styles.logo} src="http://shoppopbox.com/wp-content/uploads/2017/09/homechef-logo-square-1.jpg" alt="myRecipes logo"/>
          </Link>
          <Link className={styles.title} to="/">
            Home
          </Link>
           <Link className={styles.navTab} to="/recipes">
            All Recipes
           </Link>
          <Link className={styles.navTab} to="/category">
            All Categories
          </Link>
          <Link className={styles.navTab} to="/about">
            About Us
          </Link>
          <Link className={styles.navTab} to="/contact">
            Contact Us
          </Link>
          <Link className={styles.login} to="/login">
            Login
          </Link>
        </nav>
    )
};

export default Nav;
