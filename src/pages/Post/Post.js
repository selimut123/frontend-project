import React, {useState} from "react";

import SinglePost from "../SinglePost/SinglePost";
import UpdatePost from "../UpdatePost/UpdatePost";
import SideBar from "../../components/UIElement/SideBar/SideBar";
import Button from "../../components/FormElements/Button/Button";
import Modal from "../../components/UIElement/Modal/Modal";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './Post.css';

const DUMMY_VARIABLE = [
  {
    id: "b1",
    image:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480",
    title: "3 Simple Ways to Get Insane Aim at Valorant",
    genre: ["Music", "Life"],
    description:
      "Seen you eyes son show. Far two unaffected one  \n alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. ",
    creator: "u1",
  },
  {
    id: "b2",
    image: "https://peakvisor.com/photo/gunung-semeru.jpg",
    title: "Nature View in Bromo Mountain",
    genre: ["Music", "Life"],
    description:
      "Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. ",
    creator: "u2",
  },
  {
    id: "b3",
    image:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480",
    title: "3 Simple Ways to Get Insane Aim at Valorant",
    genre: ["Music", "Life"],
    description:
      "Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. ",
    creator: "u3",
  },
  {
    id: "b4",
    image:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480",
    title: "3 Simple Ways to Get Insane Aim at Valorant",
    genre: ["Music", "Life"],
    description:
      "Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. ",
    creator: "u3",
  },
  {
    id: "b5",
    image:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480",
    title: "3 Simple Ways to Get Insane Aim at Valorant",
    genre: ["Music", "Life"],
    description:
      "Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. ",
    creator: "u3",
  },
  {
    id: "b6",
    image:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480",
    title: "3 Simple Ways to Get Insane Aim at Valorant",
    genre: ["Music", "Life"],
    description:
      "Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. ",
    creator: "u3",
  },
];

export default function Post(){
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

    return (
      <React.Fragment>
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
              <Button danger>
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
        <div className="postPage">
          {updateMode ? (
            <UpdatePost
              items={DUMMY_VARIABLE}
              blogId={blogId}
              onClick={cancelUpdateHandler}
            />
          ) : (
            <SinglePost
              items={DUMMY_VARIABLE}
              blogId={blogId}
              onClick={updateIconHandler}
              onClick2={showDeleteWarningHandler}
            />
          )}

          <SideBar items={DUMMY_VARIABLE} />
        </div>
      </React.Fragment>
    );
}