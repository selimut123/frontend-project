import React from "react";
import { Link } from "react-router-dom";

import "./BlogItem.css";

function BlogItem(props) {
  return (
    <div className="post">
      <Link
        to={`/singleBlog/${props.id}`}
        exact
        style={{ textDecoration: "none" }}
      >
        <div className="postImg">
          <img src={props.image} alt={props.title} />
        </div>

        <div className="postInfo">
          <span className="postTitle">{props.title}</span>
          <div className="postCats">
            {props.genre.map((genre, index) => (
              <span key={index} className="postCat">
                {genre}{" "}
              </span>
            ))}
            <span className="postDate">1 hour ago</span>
          </div>
          <hr />
          <p className="postDesc">{props.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogItem;
