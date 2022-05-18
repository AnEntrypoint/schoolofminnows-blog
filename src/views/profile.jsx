import React, { useState } from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import Counter from "../components/counter";
import PrimaryButton from "../components/primary-button";
import SecondaryButton from "../components/secondary-button";
import Footer from "../components/footer";
import "./profile.css";

const Profile = (props) => {
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(0);
  if (loaded == 0) {
    (async () => {
      if (window.author) setAuthor(await window.author);
    })();
  }
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Notus Pro</title>
        <meta property="og:title" content="Profile - Notus Pro" />
      </Helmet>
      <div
        className="profile-image"
        style={{
          backgroundImage:
            "url(" +
            (author?.json_metadata
              ? JSON.parse(author?.json_metadata || "{}")?.profile?.cover_image
              : "") +
            ")",
        }}
      >
        <div className="blog-post-fixed-header">
          <Header heading={window.location.host.split(".")[0]} rootClassName="header-root-class-name"></Header>
        </div>
        <h1 className="blog-post-text text2XL">{props.featuredTitle}</h1>
        <div className="profile-bg"></div>
      </div>
      <div className="profile-container01">
        <div className="profile-container02">
          <div className="profile-container03">
            <Counter type="&nbsp;" number="&nbsp;"></Counter>
          </div>
          <img
            alt="image"
            src={
              author?.json_metadata
                ? JSON.parse(author?.json_metadata || "{}")?.profile
                    ?.profile_image
                : ""
            }
            className="profile-image2"
          />
          <div className="profile-container04">
            <div className="profile-container05">
              <a
                href={"https://hive.blog/@" + window.location.host.split(".")[0]}
              >
                <PrimaryButton button="hive"></PrimaryButton>
              </a>
            </div>
            <a href="https://discord.gg/NED33mNpms">
              <SecondaryButton button="discord"></SecondaryButton>
            </a>
          </div>
        </div>
        <div className="profile-container06">
          <h3 className="profile-text text2XL">
            {author?.json_metadata
              ? JSON.parse(author?.json_metadata || "{}")?.profile?.name
              : ""}
          </h3>
          <div className="profile-container07">
            <svg viewBox="0 0 1024 1024" className="profile-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <span className="profile-text1 textSM">
              {author?.json_metadata
                ? JSON.parse(
                    author?.json_metadata || "{}"
                  )?.profile?.location.toUpperCase()
                : ""}
            </span>
          </div>
          <div className="profile-container08">
            <svg viewBox="0 0 1024 1024" className="profile-icon2">
              <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
            </svg>
            <a
              href={
                author?.json_metadata
                  ? JSON.parse(author?.json_metadata || "{}")?.profile?.website
                  : ""
              }
            >
              <span className="profile-text2 textSM">
                {author?.json_metadata
                  ? JSON.parse(author?.json_metadata || "{}")?.profile?.website
                  : ""}
              </span>
            </a>
          </div>
          <div className="profile-container11"></div>
          <span className="profile-text4">
            <span className="profile-text5">
              {author?.json_metadata
                ? JSON.parse(author?.json_metadata || "{}")?.profile?.about
                : ""}
            </span>
          </span>
          <span className="profile-text6">
            <a href={"https://hive.blog/@" + window.location.host.split(".")[0]}><span>Show more</span></a>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
