import React from "react";
import PropTypes from "prop-types";
import styles from "./RecipesList.module.css";
import RecipesListItem from "./RecipesListItem.jsx";

const RecipesList = (props) => {
  let displayContent;

  if (props.recipes.length) {
    displayContent = (
        <div className={styles.grid_style}>
        {props.recipes.map((recipe) => (
          <RecipesListItem recipe={recipe} key={recipe.ID} />
        ))}
        </div>
      
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div className={styles.ListContainer}>
        {displayContent}
    </div>
  );
};

RecipesList.propTypes = {
    recipes: PropTypes.array.isRequired
}
export default RecipesList;
