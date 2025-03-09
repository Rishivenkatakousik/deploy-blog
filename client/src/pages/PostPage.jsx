import { formatISO9075 } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/Usercontext";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`${import.meta.env.API_URL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";
  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link to={`/edit/${postInfo._id}`} className="edit-btn">
            Edit this post
          </Link>
        </div>
      )}
      <div className="image">
        <img src={`${import.meta.env.API_URL}/${postInfo.cover}`} alt="" />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
};

export default PostPage;
