import React from "react";
import { useAuth } from "../context/fireBaseAuth/FirebaseAuth";
import Star from "./Star";

const ReviewCard = ({ data }) => {
  const { name, lastName, text, likes, dislikes, childStatus, rating } = data;
  const { userData } = useAuth();

  const starsUrl = {
    url: "./assets/star-icon.svg",
  };
  return (
    <article className="reviewCard">
      <div className="reviewCard_user">
        <span>
          <b>
            {name} {lastName}{" "}
          </b>
          - {childStatus}
        </span>
        <div>
          {new Array(rating).fill(starsUrl).map((el, index) => (
            <Star key={index} data={el} />
          ))}
          {new Array(5 - rating).fill(starsUrl).map((el, index) => (
            <Star key={index} data={el} />
          ))}
        </div>
      </div>
      <div className="reviewCard_content">“{text}”</div>
      <div className="reviewCard_buttons">
        {!userData ? (
          <div className="reviewCard_buttons__Container">
            <div className="reviewCard_buttons-like">
              <button>
                <img src="./assets/like-icon.svg" alt="like icon" />
              </button>
              <span>{likes}</span>
            </div>
            <div className="reviewCard_buttons-dislike">
              <button>
                <img src="./assets/dislike-icon.svg" alt="dislike icon" />
              </button>
              <span>{dislikes}</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </article>
  );
};

export default ReviewCard;
