import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Deals from "./components/Deals/Deals";
import Admin from "./components/Dashboard/Admin/Admin";
import "./App.css";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NewsDetails from "./components/NewsDetails/NewsDetails";
import InternationalNews from "./components/AllNews/International/InternationalNews";
import Footer from "./components/Home/Footer/Footer";
import Sports from "./components/AllNews/Sports/Sports";
import NationalNews from "./components/AllNews/National/NationalNews";
import NoMatch from "./components/NoMatch/NoMatch"
export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart,setCart]=useState({})

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser,cart,setCart }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/deals">
            <Header />
            <Deals />
          </Route>
          <Route path="/nationalNews">
            <Header/>
            <NationalNews/>
            <Footer/>
          </Route>
          <Route path="/internationalNews">
            <Header/>
            <InternationalNews/>
            <Footer/>
          </Route>
          <Route path="/sportsNews">
            <Header/>
            <Sports/>
            <Footer/>
          </Route>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/newsDetails">
            <Header />
            <NewsDetails/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/:adminPanel">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
