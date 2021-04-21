import React from "react";
import { Link } from "react-router-dom";
import styles from "../DetailItem/DetailItem.module.css";
import PropTypes from "prop-types";
import DetailItem from "../DetailItem/DetailItem.jsx";


const Detail = (props) => {
  let displayContent;

  if (props.recipes.length) {
    displayContent = (
        <div>
        {props.recipes.map((recipe) =>
         recipe.recipeID == props.recipeID ? 
          <DetailItem recipe={recipe} key={recipe.ID} />:null
       )}
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

Detail.propTypes = {
    recipes: PropTypes.array.isRequired,
    recipeID:PropTypes.string.isRequired
}

export default Detail;