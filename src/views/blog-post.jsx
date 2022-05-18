import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/header";
import Label from "../components/label";
import ArticleCard from "../components/article-card";
import Footer from "../components/footer";
import "./blog-post.css";
import ReactMarkdown from "react-markdown";

const BlogPost = (props) => {
  const [author, setAuthor] = useState({});
  const [listItems, setListItems] = useState([]);
  const [featuredItem, setFeaturedItem] = useState({});
  const [storyItem, setStoryItem] = useState({});
  const [loaded, setLoaded] = useState(0);
  if (loaded == 0) {
    (async () => {
      const articles = [...(await window.posts)];
      setStoryItem(articles.shift());
      setFeaturedItem(articles.shift());
      setListItems(
        articles.map((article) => (
          <ArticleCard
            name={article.author}
            time={article.date}
            title={article.title}
            key={article.date}
            description={article.body.replace(
              /[^\(](http(s?):)([/|.|\w|\s|-])(.*)\.(?:(jpg|gif|png))/gi,
              "\n![]($1//$4.$5)"
            )}
            image_src={article.titleImage}
            avatar_src={article.authorAvatarUrl}
          ></ArticleCard>
        ))
      );
      if (window.author) setAuthor(await window.author);
    })();
    setLoaded(1);
  }
  return (
    <div className="blog-post-container">
      <Helmet>
        <title>Blog - SCHOOL OF MINNOWS</title>
        <meta property="og:title" content="BlogPost - Notus Pro" />
      </Helmet>
      <div className="profile-image" style={{
            backgroundImage:
              "url(" +
              (author?.json_metadata
                ? JSON.parse(author?.json_metadata || "{}")?.profile
                    ?.cover_image
                : "") +
              ")",
          }}>
        <div className="blog-post-fixed-header">
          <Header heading={window.location.host.split(".")[0]} rootClassName="header-root-class-name"></Header>
        </div>
        <h1 className="blog-post-text text2XL">{props.featuredTitle}</h1>
        <div className="profile-bg"></div>
      </div>
      <div className="blog-post-post-details">
        <div className="blog-post-container1">
          <svg viewBox="0 0 1170.2857142857142 1024" className="blog-post-icon">
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <span className="blog-post-text01 textXL">{props.featuredDate}</span>
        <span className="blog-post-text06">
          <ReactMarkdown>
            {featuredItem.body?.replace(
              /[^\(](http(s?):)([/|.|\w|\s|-])(.*)\.(?:(jpg|gif|png))/gi,
              "\n![]($1//$4.$5)"
            )}
          </ReactMarkdown>

          <br></br>
        </span>
      </div>
      <div className="blog-post-container2">
        <div>
          <span className="story-text textLG">
            <span>{storyItem.date}</span>
          </span>
          <h3 className="story-text2 text2XL">{storyItem.title}</h3>
          <ReactMarkdown>{storyItem.body}</ReactMarkdown>
        </div>
      </div>
      <div className="blog-post-posts">
        <div className="blog-post-container3">
          <Label text="STORIES"></Label>
          <h3 className="blog-post-text08 healine">
            <span className="blog-post-text09">Before I go </span>
          </h3>
          <span className="blog-post-text10 textXL">
            Take a look at some of my earlier posts
          </span>
        </div>
        {listItems}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogPost;
