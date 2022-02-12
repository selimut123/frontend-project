import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import BlogPage from "./pages/Blog/BlogPage";
import MyBlog from "./pages/MyBlog/MyBlog";
import WriteBlog from "./pages/WriteBlog/WriteBlog";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MainNavigation from "./components/navigations/MainNavigation/MainNavigation";
import "./App.css";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <BlogPage />
        </Route>
        <Route path="/user/blog" exact>
          <MyBlog />
        </Route>
        <Route path="/write" exact>
          <WriteBlog />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <BlogPage />
        </Route>
        <Route path="/user/login" exact>
          <Login />
        </Route>
        <Route path="/user/register" exact>
          <Register />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
