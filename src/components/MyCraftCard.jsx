import { FaPen } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
const MyCraftCard = ({ craft }) => {
  const { _id, name, price, rating, customization, stockStatus, photo_url } =
    craft;
  return (
    <div className="rounded-lg shadow-xl  cursor-pointer transition-transform duration-300 transform hover:scale-105 border">
      <figure className="px-10 pt-2 ">
        <img
          className="rounded-lg h-48 w-full object-cover"
          src={photo_url}
          alt={name}
        />
      </figure>
      <div className=" px-10 p-2">
        <h2 className="card-title text-2xl">{name}</h2>

        <div>
          <p>
            <strong>Price:</strong>{" "}
            <span className="text-sm ml-2 text-gray-500">{price}</span>
          </p>

          <p className="flex items-center">
            <strong>Rating:</strong>{" "}
            <span className="text-sm flex items-center ml-2 text-gray-500">
              {rating == 1 && (
                <RiStarSFill className="text-yellow-500 text-lg" />
              )}
              {rating == 2 && (
                <>
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                </>
              )}
              {rating == 3 && (
                <>
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                </>
              )}
              {rating == 4 && (
                <>
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                </>
              )}
              {rating == 5 && (
                <>
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                </>
              )}
            </span>
          </p>
          <p>
            <strong>Customization:</strong>{" "}
            <span className="text-sm ml-2 text-gray-500">{customization}</span>
          </p>
          <p>
            <strong>Stock Status:</strong>
            <span className="text-sm ml-2 text-gray-500"> {stockStatus}</span>
          </p>
        </div>
        <div className="card-actions justify-center mt-2">
          <button
            to={`/craft/${_id}`}
            className="btn cursor-pointer gradient-bg text-white"
          >
            <FaPen /> Update
          </button>
          <button
            to={`/craft/${_id}`}
            className="btn cursor-pointer gradient-bg text-white"
          >
            {" "}
            <MdDelete />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
