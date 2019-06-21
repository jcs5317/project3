import React from "react";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import SavedRecipes from "./pages/SavedRecipes";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SignUp from "./pages/SignUp";


const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/savedrecipes" component={SavedRecipes} />
          <Route exact path="/searchform" component={SearchPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;