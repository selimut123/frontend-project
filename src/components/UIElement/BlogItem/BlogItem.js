import React from "react";

import "./BlogItem.css";

function BlogItem(props) {
  return (
    <div className="post">
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
    </div>
  );
}

export default BlogItem;
