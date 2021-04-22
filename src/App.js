import React from "react";
import {useEffect, useState} from "react";
import { Switch, Route} from "react-router-dom";
import AllCategory from "./AllCategory/AllCategory.jsx";
import Category from "./Category/Category.jsx";
import Detail from "./Detail/Detail.jsx";
import Register from "./Register/Register.jsx";
import Login from "./Login/Login.jsx";
import RecipesList from "./Recipes/RecipesList.jsx";
import Home from "./Home/Home.jsx";
import Footer from "./Footer/Footer.jsx";
import { isEmpty } from "lodash";
import Nav from "./Nav/Nav.jsx";
import Error from "./Error/Error.jsx";
import AboutUs from "./About/AboutUs.jsx";
import Contact from "./Contact/Contact.jsx";


const allCategories = {
  Soup: { id: "1", name: "Soup" },
  Appetizer: { id: "2", name: "Appetizer" },
  Snack: { id: "4", name: "Snack" },
  MainCourse: { id: "3", name: "Main Course" },
  Dessert: { id: "5", name: "Dessert" },
};

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://demo2263568.mockable.io/getRecipes");
      const responseJson = await response.json();
      setFetchedData(Object.values(responseJson));
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <header>
          <Nav/>
      </header>
      {}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route exact path="/recipes"><RecipesList recipes={fetchedData} /></Route>
        <Route path="/register" exact component={Register} />
        <Route path="/category" exact component={AllCategory} />
        {}
        <Route path="/category/:categoryName" exact render={({ match }) => (
            <Category categoryName={match.params.categoryName}  recipes={fetchedData}  /> )}/>
        <Route path="/recipe/:recipeID"  exact render={({ match }) => (
           <Detail  recipeID={match.params.recipeID} recipes={fetchedData}/>)}/>
        <Route path="/about" exact component={AboutUs} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Error} />
      </Switch>
      <footer>
        <Footer/>
      </footer>
    </div>
    
  );
}

export default App;
