import React, {useContext, useEffect, useState} from "react";

import SinglePost from "../SinglePost/SinglePost";
import UpdatePost from "../UpdatePost/UpdatePost";
import SideBar from "../../components/UIElement/SideBar/SideBar";
import Button from "../../components/FormElements/Button/Button";
import Modal from "../../components/UIElement/Modal/Modal";
import LoadingSpinner from "../../components/UIElement/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../hooks/http-hook";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import './Post.css';
import ErrorModal from "../../components/ErrorModal";
import { AuthContext } from "../../context/auth-context";

export default function Post(){
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedBlogs, setLoadedBlogs] = useState();
  const [updateMode, setUpdateMode] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
    const updateIconHandler = () =>{
        setUpdateMode(true);
    };

    const cancelUpdateHandler = (event) => {
        event.preventDefault();
        setUpdateMode(false);
    }

    const showDeleteWarningHandler = () => setShowConfirmModal(true);
    const cancelDeleteHandler = () => setShowConfirmModal(false);

    const blogId = useParams().blogId;
    const history = useHistory();

    useEffect(() => {
      const fetchBlog = async () => {
        try {
          const responseData = await sendRequest(
            `http://localhost:5000/api/blog`
          );
          setLoadedBlogs(responseData.blogs);
        } catch (err) {}
      };
      fetchBlog();
    }, [sendRequest]);

    const confirmDeleteHandler = async () => {
      setShowConfirmModal(false);
      try {
        await sendRequest(
          `http://localhost:5000/api/blog/delete/${blogId}`,
          "DELETE",
          null,
          {
            Authorization: "Bearer " + auth.token,
          }
        );
        history.push("/user/blog/" + auth.userId);
      } catch (err) {}
    };

    return (
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <Modal
          show={showConfirmModal}
          onCancel={cancelDeleteHandler}
          header="Are you sure?"
          footerClass="place-item__modal-actions"
          footer={
            <React.Fragment>
              <Button inverse onClick={cancelDeleteHandler}>
                CANCEL
              </Button>
              <Button danger onClick={confirmDeleteHandler}>
                DELETE
              </Button>
            </React.Fragment>
          }
        >
          <p>
            Do you want to proceed and delete this place? please note that it
            can't be undone thereafter
          </p>
        </Modal>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && loadedBlogs && (
          <div className="postPage">
            {updateMode ? (
              <UpdatePost
                items={loadedBlogs}
                blogId={blogId}
                onClick={cancelUpdateHandler}
              />
            ) : (
              <SinglePost
                items={loadedBlogs}
                blogId={blogId}
                onClick={updateIconHandler}
                onClick2={showDeleteWarningHandler}
              />
            )}

            <SideBar
              items={loadedBlogs.filter((blog) => blog.id !== blogId)}
            />
          </div>
        )}
      </React.Fragment>
    );
}