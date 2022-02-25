import React from "react";

import { Link } from "react-router-dom";
import "./SideBar.css";

function SideBar(props) {
  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <img
          src="https://media.istockphoto.com/photos/indonesia-flag-picture-id479423455?k=20&m=479423455&s=612x612&w=0&h=GU9rSDjhufNw-pYbU3fczh5bIltKbEpHMvZQ_p0vfFU="
          alt=""
        />
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Game</li>
          <li className="sidebarListItem">Finance</li>
          <li className="sidebarListItem">Weather</li>
          <li className="sidebarListItem">Science</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitleBlog">MORE BLOG</span>
        <ul>
          {props.items.length === 0 && (
            <div className="place-list center">
              <h2>NO MORE BLOGS. ADD ONE!</h2>
            </div>
          )}
          {props.items.length !== 0 &&
            props.items.map((blog) => {
              const date = new Date(blog.createdAt);
              const displayDate =
                date.getDate() +
                "/" +
                date.getMonth() +
                "/" +
                date.getFullYear();
              return (
                <Link
                  to={`/blogPost/${blog.id}`}
                  style={{ textDecoration: "none" }}
                  key={blog.id}
                >
                  <div className="blogContainer">
                    <span className="blogItem">{blog.title}</span>
                    <div className="genreContainer">
                      <span className="postDate">{displayDate}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
