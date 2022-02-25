import React, { useEffect, useState } from "react";

import SideBar from "../../components/UIElement/SideBar/SideBar";
import Header from "../Header/Header";
import BlogItem from "../../components/UIElement/BlogItem/BlogItem";
import ErrorModal from "../../components/ErrorModal";
import LoadingSpinner from "../../components/UIElement/LoadingSpinner/LoadingSpinner";
import "./BlogPage.css";
import { useHttpClient } from "../../hooks/http-hook";

function BlogPage() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedBlogs, setLoadedBlogs] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/blog"
        );
        setLoadedBlogs(responseData.blogs);
      } catch (err) {}
    };
    fetchBlogs();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedBlogs && (
        <div>
          <Header />
          <h1 className="LatestPost">Latest Post</h1>
          <div className="AllBlogs">
            <ul className="BlogList">
              {loadedBlogs.slice(0, 6).map((blog) => (
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
            <SideBar items={loadedBlogs.slice(6, loadedBlogs.length)} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default BlogPage;
