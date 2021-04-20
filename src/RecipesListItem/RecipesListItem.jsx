import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./RecipesListItem.module.css";

const RecipesListItem = (props) => {
  return (
    <div>
        <Link className={styles.ItemContainer} to={props.recipe.detailURL}>
      <div>
          <figure className={styles.recipe__fig}>
            <img src={props.recipe.imageURL} alt={props.recipe.name} />
          </figure>
      </div>
      <div>
        <h4 className={styles.recipe__name}>{props.recipe.name}</h4>
      </div>
      </Link>
      
    </div>
  );
};

RecipesListItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};
export default RecipesListItem;
