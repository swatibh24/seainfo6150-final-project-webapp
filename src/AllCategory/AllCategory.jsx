import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllCategory.module.css";

const AllCategory = () => {
  return (
    <div className={styles.allCategoryContainer}>
      <h2 className={styles.allCategoryDetail}>Pick the categories you would like to explore!
      </h2>
    <div className={styles.ListContainer}>
     <div className={styles.container}>
      <Link className={styles.styleCategories} to="/category/Soup">
        <p className={styles.allCategoryName}>Soup</p>
      </Link>
      <Link className={styles.styleCategories} to="/category/Appetizer">
        <p className={styles.allCategoryName}>Appetizer</p>
      </Link>
      <Link className={styles.styleCategories} to="/category/Snack">
        <p className={styles.allCategoryName}>Snack</p>
      </Link>
      <Link className={styles.styleCategories} to="/category/Main-Course">
        <p className={styles.allCategoryName}>Main Course</p>
      </Link>
      <Link className={styles.styleCategories} to="/category/Dessert">
        <p className={styles.allCategoryName}>Dessert</p>
      </Link>
      </div>
      </div>
         <img className={styles.allCategoryImg}
         src="https://c0.wallpaperflare.com/preview/301/367/805/black-bean-close-up-cooked-cuisine.jpg" alt="categories"/>
    </div>
  );
};

export default AllCategory;
