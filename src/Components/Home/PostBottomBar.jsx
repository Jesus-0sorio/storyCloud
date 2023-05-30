import React, { useState } from "react";
import heart from "../../assets/heart.svg";
import redHeart from "../../assets/redHeart.svg";
import { useSelector } from "react-redux";
import { usePost } from "../../hooks/usePost";


export const PostBottomBar = ({ post }) => {
  const { updatePost } = usePost();
  const {
    user: { userID },
  } = useSelector((state) => state.user);

  const [like, setLike] = useState(post.likes.includes(userID) || false);
  const [ likes, setLikes ] = useState(post.likes.length || 0);

  const {
    description,
    _id: postID,
  } = post;

  const handleLike = () => {
    setLike(!like);
    setLikes(like ? likes - 1 : likes + 1);
    updatePost(postID, { like: like });
  };

  return (
    <>
      <div className="h-1/2 bg-gray-200 rounded-b-md space-y-2">
        <div className="flex items-center justify-start py-2 px-1">
          <button
            onClick={handleLike}
            className="flex items-center text-gray-700 mx-4 space-x-2"
          >
            <img src={like ? redHeart : heart} className="h-5 " />
            <span className="font-semibold">{likes}</span>
          </button>
          <div>
            <div className="ml-2 text-left">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};
