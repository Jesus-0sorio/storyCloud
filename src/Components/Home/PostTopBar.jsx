import { Link } from "react-router-dom";
import profileImg from "../../assets/profileImg.webp";

export const PostTopBar = ({ create_by }) => {
  return (
    <>
      <div className="h-1/2 p-2 bg-gray-200 rounded-md">
        <div className="flex items-center justify-between py-4 px-6 border-b">
          <Link
            to={`/profile/${create_by._id}`}
            className="text-lg font-semibold flex space-x-3 items-center"
          >
            <img
              src={
                create_by.fileUrl
                  ? `${import.meta.env.VITE_BASE_URL}${create_by.fileUrl}`
                  : profileImg
              }
              alt=""
              className="rounded-full w-10 h-10"
            />
            <div>{create_by.username}</div>
          </Link>
        </div>
      </div>
    </>
  );
};
