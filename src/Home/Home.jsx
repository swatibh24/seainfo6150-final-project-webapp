import React from 'react'
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const Home = () => {
    return (
      <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to My Home Recipes!!!</h1>
       <img className={styles.homeImg} src="https://i.keaitupian.net/up/7b/e9/bb/c48adec6c91a1ed2ec5e6b7f65bbe97b.jpg" alt="Homepage"/>
                      </div>
    )
}

export default Home
