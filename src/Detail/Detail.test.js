import React from "react";
import { render } from "@testing-library/react";
import Detail from "./Detail.jsx";
import { Link, BrowserRouter } from "react-router-dom";

it("renders the Detail component correctly", () => {
  const recipes = [
    {
      "categoryID": "1",
      "recipeID": "11",
      "ID":"11-Cream-of-Mushroom-soup",
      "categoryName": "Soup",
      "name": "Cream of Mushroom Soup",
      "description": "A simple type of soup where a basic roux is thinned with cream or milk and then mushrooms and/or mushroom broth are added.",
      "ingredients": "2 tablespoons butter, 1/2 pound sliced fresh mushrooms, 1/4 cup chopped onion, 6 tablespoons all-purpose flour, 1/2 teaspoon salt, 1/8 teaspoon pepper, 2 cans (14-1/2 ounces each) chicken broth, 1 cup half-and-half cream",
      "details": {
        "one": "Step 1: In a large saucepan, heat butter over medium-high heat; saute mushrooms and onion until tender.",
        "two": "Step 2: Mix flour, salt, pepper and 1 can broth until smooth; stir into mushroom mixture. Stir in remaining broth. Bring to a boil; cook and stir until thickened, about 2 minutes. Reduce heat; stir in cream. Simmer, uncovered, until flavors are blended, about 15 minutes, stirring occasionally."
      },
      "imageURL": "https://www.budgetbytes.com/wp-content/uploads/2017/09/Creamy-Garlic-Mushroom-Soup-spoon.jpg",
      "detailURL": "/recipe/11",
      "categoryURL": "/category/1"
    },
     {
      "categoryID": "1",
      "recipeID": "12",
      "ID":"12-Mexican-Chicken-Corn-Chowder",
      "categoryName": "Soup",
      "name": "Mexican Chicken Corn Chowder",
      "description": "A creamy, cheesy, veggie and chicken filled soup that's layered with Mexican flavors.",
      "ingredients": "1-1/2 pounds boneless skinless chicken breasts, 1/2 cup chopped onion, 3 tablespoons butter, 1 to 2 garlic cloves, 1 cup hot water, 2 teaspoons chicken bouillon granules, 1/2 to 1 teaspoon ground cumin, 2 cups half-and-half cream, 2 cups shredded Monterey Jack cheese, 1 can (14-3/4 ounces) cream-style corn, 1 can (4 ounces) chopped green chiles, 1/4 to 1 teaspoon hot pepper sauce, 1 medium tomato",
      "details": {
        "one": "Step 1: In a Dutch oven, brown chicken and onion in butter until chicken is no longer pink. Add garlic; cook 1 minute longer. Add the water, bouillon and cumin; bring to a boil. Reduce heat; cover and simmer for 5 minutes.",
        "two": "Step 2: Stir in the cream, cheese, corn, chiles and hot pepper sauce. Cook and stir over low heat until cheese is melted; add tomato. If desired, top with cilantro and tortilla strips."
      },
      "imageURL": "https://myfoodstory.com/wp-content/uploads/2017/11/Instant-Pot-Chicken-Potato-Corn-Chowder-with-Bacon-Pressure-Cooker-Recipe-2.jpg",
      "detailURL": "/recipe/12",
      "categoryURL": "/category/1"
    }
  ]
  const { container } = render(<BrowserRouter><Detail recipes={recipes} recipeID="12"/></BrowserRouter>);
  expect(container).toMatchSnapshot();
});