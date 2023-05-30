import React from "react";
import "tailwindcss/tailwind.css";
import { Post } from "../Components/Home/Post";
import { Suggestions } from "../Components/Home/Suggestions";
import { usePost } from "../hooks/usePost";

export const Home = () => {
  
  const { posts } = usePost();

  return (
    <>
      <div className="grid grid-cols-4 pl-60">
        <div
          className="flex col-span-4 h-screen overflow-y-scroll justify-center pt-10"
        >
          <div className="w-3/5 gap-4 space-y-16">
            {posts && posts?.map((post) => (
              <Post
                key={post._id}
                post={post}
              />
            ))}
          </div>
        </div>
        {/* <div className="col-span-1 pt-10">
          <Suggestions />
        </div> */}
      </div>
    </>
  );
};
