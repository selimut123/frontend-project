import React from "react";

import SideBar from "../../components/UIElement/SideBar/SideBar";
import Header from "../Header/Header";
import Card from "../../components/UIElement/Card/Card";
import Button from "../../components/FormElements/Button/Button";
import BlogItem from "../../components/UIElement/BlogItem/BlogItem";
import "./BlogPage.css";

const DUMMY_VARIABLE = [
  {
    id: "b1",
    image:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480",
    title: "3 Simple Ways to Get Insane Aim at Valorant",
    genre: ["Music", "Life"],
    description:
      "Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. ",
    creator: "u1",
  },
  {
    id: "b2",
    image:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480",
    title: "3 Simple Ways to Get Insane Aim at Valorant",
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

function BlogPage(props) {
  if (DUMMY_VARIABLE.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>no places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1 className="LatestPost">Latest Post</h1>
      <div className="AllBlogs">
        <ul className="BlogList">
          {DUMMY_VARIABLE.map((blog) => (
            <BlogItem
              key={blog.id}
              id={blog.id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              genre={blog.genre}
              creatorId={blog.creator}
            />
          ))}
        </ul>
        <SideBar items={DUMMY_VARIABLE}/>
      </div>
    </div>
  );
}

export default BlogPage;
