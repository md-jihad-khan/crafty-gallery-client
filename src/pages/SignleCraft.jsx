import { RiStarSFill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";

const SignleCraft = () => {
  const craft = useLoaderData();

  return (
    <>
      <div className="hero-content flex-col gap-10 lg:flex-row  ">
        <div className=" bg-[#1313130D] rounded-lg lg:w-full ">
          <img
            src={craft.photo_url}
            className="md:p-20 lg:h-[80vh] object-cover w-full  "
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{craft.name}</h1>

          <p className=" font-medium text-xl mb-2"> {craft.description}</p>
          <hr className=" gradient-border border" />
          <p className="my-3 text-lg font-semibold">
            Subcategory: {craft.subcategory}
          </p>
          <hr className="gradient-border border mb-4" />
          <p className="flex items-center">
            <strong>Rating:</strong>{" "}
            <span className="text-sm flex items-center ml-2 text-gray-500">
              {craft.rating == 1 && (
                <RiStarSFill className="text-yellow-500 text-lg" />
              )}
              {craft.rating == 2 && (
                <>
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                </>
              )}
              {craft.rating == 3 && (
                <>
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                </>
              )}
              {craft.rating == 4 && (
                <>
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                  <RiStarSFill className="text-yellow-500 text-lg" />
                </>
              )}
              {craft.rating == 5 && (
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
            <strong>Price:</strong>{" "}
            <span className="text-sm ml-2 text-gray-500">{craft.price}</span>
          </p>
          <p>
            <strong>Customization:</strong>{" "}
            <span className="text-sm ml-2 text-gray-500">
              {craft.customization}
            </span>
          </p>
          <p>
            <strong>Stock Status:</strong>
            <span className="text-sm ml-2 text-gray-500">
              {" "}
              {craft.stockStatus}
            </span>
          </p>
          <p>
            <strong>Processing Time:</strong>{" "}
            <span className="text-sm ml-2 text-gray-500">
              {" "}
              {craft.processing_time}
            </span>
          </p>

          <hr className="gradient-border border mt-4" />
        </div>
      </div>
    </>
  );
};

export default SignleCraft;
