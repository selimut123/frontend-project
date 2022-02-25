import React from "react";
import { Link } from "react-router-dom";

import "./BlogItem.css";

function BlogItem(props) {
  const date = new Date(props.createdAt);
  const displayDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  return (
    <div className="post">
      <Link to={`/blogPost/${props.id}`} style={{ textDecoration: "none" }}>
        <div className="postImg">
          <img src={`http://localhost:5000/${props.image}`} alt={props.title} />
        </div>

        <div className="postInfo">
          <span className="postTitle">{props.title}</span>
          <div className="postAuthors">
            <span className="postAuthor">
              Auth: {props.creatorName.split(" ")[0]}
            </span>
            <span className="postDate">{displayDate}</span>
          </div>
          <hr />
          <p className="postDesc">{props.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogItem;
