import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import Swal from "sweetalert2";

const UpdateCraft = () => {
  const craft = useLoaderData();

  const handleAddCraft = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.time.value;
    const stockStatus = form.stockStatus.value;
    const photo_url = form.photo.value;
    const description = form.description.value;

    const updatedCraft = {
      name,
      subcategory,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      photo_url,
      description,
    };

    fetch(`http://localhost:5000/craft/${craft._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Craft Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="md:w-4/5 mx-auto p-5">
        <div className="bg-base-200  p-5 rounded-lg text-center ">
          <div className="flex items-center justify-center gap-3 text-2xl md:text-5xl mb-2 mt-3 font-poppins font-bold">
            <h3 className="gradient-text ">Update Craft</h3>
            <span className="text-teal-500 text-2xl md:text-5xl">
              <Typewriter
                cursor
                words={[" Item "]}
                cursorStyle="_"
                typeSpeed={100}
                loop
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64  my-4 border gradient-border rounded "></hr>
            <div className="absolute px-4 -translate-x-1/2 bg-base-200 left-1/2 ">
              <svg
                className="w-2 h-2 text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
            </div>
          </div>
          <form className="p-4" onSubmit={handleAddCraft}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text gradient-text font-semibold text-xl">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter craft name"
                  className="input "
                  required
                  defaultValue={craft.name}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text gradient-text font-semibold text-xl">
                    Subcategory Name
                  </span>
                </label>
                <select
                  className="input w-full text-gray-400"
                  name="subcategory"
                  required
                  defaultValue={craft.subcategory}
                >
                  <option>Clay made pottery</option>
                  <option>Stoneware</option>
                  <option>Porcelain</option>
                  <option>Terra Cotta</option>
                  <option>Ceramics & Architectural</option>
                  <option>Home decor pottery</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text gradient-text font-semibold text-xl">
                    price
                  </span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter the craft price $"
                  className="input "
                  defaultValue={craft.price}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text gradient-text font-semibold text-xl">
                    Rating
                  </span>
                </label>
                <select
                  className="input select-bordered w-full text-gray-400"
                  name="rating"
                  required
                  defaultValue={craft.rating}
                >
                  <option value="" disabled>
                    Select rating options
                  </option>
                  <option value="1">1 star</option>
                  <option value="2">2 star</option>
                  <option value="3">3 star</option>
                  <option value="4">4 star</option>
                  <option value="5">5 star</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text gradient-text font-semibold text-xl">
                    Customization
                  </span>
                </label>
                <select
                  className="input select-bordered w-full text-gray-400"
                  name="customization"
                  required
                  defaultValue={craft.customization}
                >
                  <option value="" disabled>
                    Select customization options
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text gradient-text font-semibold text-xl">
                    Processing Time
                  </span>
                </label>
                <input
                  type="text"
                  name="time"
                  placeholder="Enter the Processing Time"
                  className="input  "
                  required
                  defaultValue={craft.processing_time}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text gradient-text font-semibold text-xl">
                    StockStatus
                  </span>
                </label>
                <select
                  className="input select-bordered w-full text-gray-400"
                  name="stockStatus"
                  required
                  defaultValue={craft.stockStatus}
                >
                  <option value="" disabled>
                    Select StockStatus options
                  </option>
                  <option value="In stock">In stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text gradient-text font-semibold text-xl">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter the photo url"
                  className="input  "
                  required
                  defaultValue={craft.photo_url}
                />
              </div>
            </div>
            <label className="label">
              <span className="label-text gradient-text font-semibold text-xl">
                Description
              </span>
            </label>
            <textarea
              name="description"
              placeholder="description"
              rows="5"
              className="input h-full w-full"
              defaultValue={craft.description}
            ></textarea>
            <button
              type="submit"
              className="border text-white gradient-bg btn mt-4 w-full font-rancho text-xl  "
            >
              Update Craft
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCraft;
