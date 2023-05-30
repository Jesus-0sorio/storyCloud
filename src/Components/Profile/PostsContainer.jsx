import React from "react";

export const PostsContainer = ({userPosts}) => {

  return (
    <div className="grid grid-cols-3 gap-4 mx-16 mt-2">
      {userPosts &&
        userPosts?.map((post) => (
          <img
            key={post._id}
            src={`${import.meta.env.VITE_BASE_URL}${post.fileUrl}`}
            alt={post.description}
            className="w-full h-80 object-cover"
          />
        ))}
    </div>
  );
};
