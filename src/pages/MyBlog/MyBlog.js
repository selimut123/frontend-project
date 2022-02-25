import React, { useEffect, useState } from "react";

import BlogItem from "../../components/UIElement/BlogItem/BlogItem";
import LoadingSpinner from "../../components/UIElement/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHttpClient } from "../../hooks/http-hook";
import "./MyBlog.css";
import ErrorModal from "../../components/ErrorModal";

function MyBlog() {
  const [loadedBlogs, setLoadedBlogs] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchBlogs = async () => {
      try{
        const responseData = await sendRequest(
          `http://localhost:5000/api/blog/user/${userId}`
        );
        setLoadedBlogs(responseData.blogs);
      }catch(err){}
    };
    fetchBlogs();
  }, [sendRequest, userId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedBlogs && (
        <div className="MyBlog">
          <ul className="MyBlogList">
            {loadedBlogs.map((blog) => (
              <BlogItem
                key={blog.id}
                id={blog.id}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                genre={blog.genre}
                createdAt={blog.createdAt}
                creatorName={blog.creatorName}
                creatorId={blog.creator}
              />
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

export default MyBlog;
