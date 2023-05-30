import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import profileImg from "../../assets/profileImg.webp";

export const ProfileBar = ({ id, foundUser, user }) => {

  return (
    <>
      <div className="grid grid-cols-3 place-items-center bg-white border-b border-gray-300 px-7 py-4">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{foundUser.name}</h2>
          <h3 className="text-2xl">{foundUser.username}</h3>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={
              foundUser.fileUrl ? `${import.meta.env.VITE_BASE_URL}${foundUser.fileUrl}` : profileImg
            }
            alt="Profile"
            className="w-36 h-36 rounded-full"
          />
          {id == user.userID && (
            <NavLink
              to={`/settings/${id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold mt-2"
            >
              Editar perfil
            </NavLink>
          )}
        </div>
        <div className="flex items-center text-gray-600 text-lg space-x-10">
          <div className="flex flex-col items-center">
            <span>
              <strong>{foundUser.posts?.length}</strong>
            </span>
            <span>Publicaciones</span>
          </div>
        </div>
      </div>
    </>
  );
};
