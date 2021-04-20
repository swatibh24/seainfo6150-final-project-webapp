import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DetailItem from "./DetailItem.jsx";
import { Link, BrowserRouter } from "react-router-dom";

it("renders the DetailItem component correctly", () => {
  const recipe = {
    "Cream of Mushroom Soup": {
      "categoryID": "1",
      "recipeID": "11",
      "ID":"11-Cream-of-Mushroom-soup",
      "categoryName": "Soup",
      "name": "Cream of Mushroom Soup",
      "description": "A simple type of soup where a basic roux is thinned with cream or milk and then mushrooms and/or mushroom broth are added.",
      "ingredients": "2 tablespoons butter, 1/2 pound sliced fresh mushrooms, 1/4 cup chopped onion, 6 tablespoons all-purpose flour, 1/2 teaspoon salt, 1/8 teaspoon pepper, 2 cans (14-1/2 ounces each) chicken broth, 1 cup half-and-half cream",
        "one": "Step 1: In a large saucepan, heat butter over medium-high heat; saute mushrooms and onion until tender.",
        "two": "Step 2: Mix flour, salt, pepper and 1 can broth until smooth; stir into mushroom mixture. Stir in remaining broth. Bring to a boil; cook and stir until thickened, about 2 minutes. Reduce heat; stir in cream. Simmer, uncovered, until flavors are blended, about 15 minutes, stirring occasionally.",
      "imageURL": "https://www.budgetbytes.com/wp-content/uploads/2017/09/Creamy-Garlic-Mushroom-Soup-spoon.jpg",
      "detailURL": "/recipe/11",
      "categoryURL": "/category/1"
    },
  }  
  const { container } = render(<BrowserRouter><DetailItem recipe={recipe}/></BrowserRouter>);
  expect(container).toMatchSnapshot();
});