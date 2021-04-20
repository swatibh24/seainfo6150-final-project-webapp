import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
import CategoryListItem from "../CategoryListItem/CategoryListItem.jsx";
import PropTypes from "prop-types";


const Category = (props) => {

  let displayContent;

  if (props.recipes.length) {
    displayContent = (
      <div className={styles.catContainer}>
      <h2 className={styles.catTitle}>{props.categoryName}</h2>
      <Link className={styles.catBackLink} to="/category">
        &lt; Back
      </Link>
      <div className={styles.itemContainer}>
      {props.recipes.map((recipe) =>
         recipe.categoryName == props.categoryName ? 
          <CategoryListItem recipe={recipe} key={recipe.ID} />:null
       )}
      </div>
    </div>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div >
        {displayContent}
    </div>
  );
};

Category.propTypes = {
    recipes: PropTypes.array.isRequired,
    categoryName:PropTypes.string.isRequired
}
  

export default Category;
