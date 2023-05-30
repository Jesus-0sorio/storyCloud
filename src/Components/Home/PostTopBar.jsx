import { Link } from "react-router-dom";

export const PostTopBar = ({ create_by }) => {
  return (
    <>
      <div className="h-1/2 p-2 bg-gray-200 rounded-md">
        <div className="flex items-center justify-between py-4 px-6 border-b">
          <Link to={`/profile/${create_by._id}`} className="text-lg font-semibold">{create_by.username}</Link>
        </div>
      </div>
    </>
  );
};
