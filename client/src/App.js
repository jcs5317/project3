import React from "react";
import Home from "./pages/Home";
import SavedRecipes from "./pages/SavedRecipes";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LogOut from "./pages/LogOut";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
// if (localStorage.getItem('jwtToken')) {
//   var user = setCurrentUser(localStorage.getItem('jwtToken')).payload;
//   axios.get().then().catch();



const App = () => {
  return (
    <Router>
      <div>
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/savedrecipes" component={SavedRecipes} />
          <AuthenticatedRoute exact path="/searchform" component={SearchPage}/>
          <AuthenticatedRoute exact path="/savedrecipes" component={SavedRecipes}/>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/logout" component={LogOut} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;