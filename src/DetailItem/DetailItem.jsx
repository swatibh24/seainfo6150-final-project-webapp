import React from "react";
import { Link } from "react-router-dom";
import styles from "./DetailItem.module.css";
import PropTypes from "prop-types";

const DetailItem = (props) => {
    //const recipe=props.recipe;
    return(
      <div className={styles.recipeContainer}>
        <div className={styles.Recipe_part}>
        <img
          className={styles.recipeImg}
          src={props.recipe.imageURL}
          alt={props.recipe.name}
        />
        <h1 className={styles.recipeName}>{props.recipe.name}</h1>
        <p className={styles.recipeDescription}>{props.recipe.description}</p>
        <h2 className={styles.recipeTitle}>Ingredients</h2>
        <p className={styles.recipeIngredients}>{props.recipe.ingredients}</p>
        <h2 className={styles.recipeTitle}>Cooking Directions</h2>
        <p className={styles.recipeDetail}>{props.recipe.one}</p>
        <p className={styles.recipeDetail}>{props.recipe.two}</p>
        <p className={styles.box}>
          <Link className={styles.catBackLink} to={props.recipe.categoryURL}>
            &lt; Back to {props.recipe.categoryName} Page
          </Link>
          <Link className={styles.recipeBackLink} to="/recipes">
        Back to All Recipes Page &gt;
      </Link>
        </p>
        </div>
      </div>
    );
    
};

DetailItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default DetailItem;