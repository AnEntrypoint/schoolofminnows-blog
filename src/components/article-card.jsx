import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import "./article-card.css";

const ArticleCard = (props) => {
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(0);
  if (loaded == 0) {
    (async () => {
      if (window.author) setAuthor(await window.author);
    })();
  }
  return (
    <div className="article-card-container">
      <div className="article-card-container1">
        <h3 className="article-card-text healine">{props.title}</h3>
        <div className="article-card-container2">
          <ReactMarkdown
            transformImageUri={(uri) =>
              uri.startsWith("http")
                ? uri
                : `${process.env.REACT_IMAGE_BASE_URL}${uri}`
            }
          >
            {props.description}
          </ReactMarkdown>
        </div>
        <div className="article-card-container3">
          <img
            alt={props.avatar_alt}
            src={
              author?.json_metadata
                ? JSON.parse(author?.json_metadata || "{}")?.profile
                    ?.profile_image
                : ""
            }
            className="article-card-image1"
          />
          <div className="article-card-container4">
            <span className="article-card-text2">{props.name}</span>
            <div className="article-card-container5">
              <span className="article-card-text3 textSM">{props.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleCard.defaultProps = {
  avatar_src: "15958451-f790-4024-a70e-cc38b82637f2",
  name: "Laura Hanks",
  title: "Portofino one of the best for remote working",
  time: "Published 3 days ago",
  avatar_alt: "avatar",
  description:
    "Finding temporary housing should be as easy as renting an Airbnb. That's th e idea behinf portofino, which raised $65 million to expand its pet sitting businesses. This come as the right move for the investment while the planet is moving on work from home...",
};

ArticleCard.propTypes = {
  avatar_src: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  avatar_alt: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
};

export default ArticleCard;
