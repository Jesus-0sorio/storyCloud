import React, { useEffect } from "react";
import { ProfileBar } from "../Components/Profile/ProfileBar";
import { PostsContainer } from "../Components/Profile/PostsContainer";
import { usePost } from "../hooks/usePost";
import { useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useSelector, useDispatch } from 'react-redux';
import { startLoading, stopLoading }  from '../Store/Slices/loadingSlice'

export const Profile = () => {

  const { getUserPosts, userPosts } = usePost();
  const { id } = useParams();
  const { foundUser, getUserById, user } = useUser();

	const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();


  useEffect(() => {
    async function fetchData() {
      dispatch(startLoading());
      await getUserPosts(id);
      await getUserById(id);
      dispatch(stopLoading());
    }
    fetchData();
  }, [Profile, location.pathname]);

  return (
    <>
      {!isLoading && (foundUser ? (
        <div className="pl-60">
          <ProfileBar id={id} foundUser={foundUser} user={user} />
          <hr />
          <br />
          {userPosts ? (
            <PostsContainer userPosts={userPosts} />
          ) : (
            <div className="flex items-center justify-center h-screen">
              <div className="text-4xl text-gray-800 bg-gray-200 p-4 rounded-lg shadow-lg">
                No hay posts para mostrar
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="text-4xl text-gray-800 bg-gray-200 p-4 rounded-lg shadow-lg">
            Usuario no encontrado
          </div>
        </div>
      ))}
    </>
  );
};
