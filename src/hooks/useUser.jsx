import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userServices } from "../Services/userServices";

export const useUser = () => {
  const { user } = useSelector((state) => state.user);

  const [foundUser, setFoundUser] = useState();

  const getUserById = async (id) => {
    try {
      const { data } = await userServices.get(id);
      setFoundUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    user,
    foundUser,
    getUserById,
  };
};
