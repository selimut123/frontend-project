import React from "react";
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
import Post from "./pages/Post/Post";
import MainNavigation from "./components/navigations/MainNavigation/MainNavigation";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";

function App() {
  const {token, login, logout, userId} = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <BlogPage />
        </Route>
        <Route path="/blogPost/:blogId" exact>
          <Post />
        </Route>
        <Route path="/user/blog/:userId" exact>
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
        <Route path="/blogPost/:blogId" exact>
          <Post />
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
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <ScrollToTop />
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
