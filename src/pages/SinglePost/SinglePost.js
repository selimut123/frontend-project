import React, { useContext } from "react";

import "./SinglePost.css";
import { AuthContext } from "../../context/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function SinglePost(props) {

  const auth = useContext(AuthContext);

  const identifiedBlog = props.items.find((p) => p.id === props.blogId);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={identifiedBlog.image} alt="" />
        <h1 className="singlePostTitle">
          {identifiedBlog.title}
          <div className="singlePostEdit">
            {auth.isLoggedIn && (
                <FontAwesomeIcon
                  icon={faEdit}
                  className="singlePostIcon"
                  onClick={props.onClick}
                />
            )}
            {auth.isLoggedIn && (
              <FontAwesomeIcon icon={faTrash} className="singlePostIcon" onClick={props.onClick2}/>
            )}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>{identifiedBlog.creator}</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">{identifiedBlog.description}</p>
      </div>
    </div>
  );
}

export default SinglePost;
