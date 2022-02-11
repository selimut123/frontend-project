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
import MainNavigation from "./components/navigations/MainNavigation/MainNavigation";
import "./App.css";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
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
          <Route path="/user/login" exact>
            <Login />
          </Route>
          <Route path="/user/register" exact>
            <Register />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
