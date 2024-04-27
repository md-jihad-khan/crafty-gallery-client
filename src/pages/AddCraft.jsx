import { useContext, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddCraft = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedCustomization, setSelectedCustomization] = useState("");
  const [selectedStockStatus, setSelectedStockStatus] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const { user } = useContext(AuthContext);

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };
  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };
  const handleCustomizationChange = (event) => {
    setSelectedCustomization(event.target.value);
  };
  const handleStockStatusChange = (event) => {
    setSelectedStockStatus(event.target.value);
  };

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
    const user_Email = form.userEmail.value;
    const user_Name = form.userName.value;
    const photo_url = form.photo.value;
    const description = form.description.value;

    const craft = {
      name,
      subcategory,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      user_Email,
      user_Name,
      photo_url,
      description,
    };

    fetch("http://localhost:5000/craft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(craft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Craft Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        form.reset();
      });
  };

  return (
    <div>
      <div className="md:w-4/5 mx-auto p-5">
        <div className="bg-base-200  p-5 rounded-lg text-center ">
          <h3 className="text-5xl mb-2 mt-3 gradient-text font-poppins font-bold">
            Add{" "}
            <Typewriter
              words={["Craft Item "]}
              loop={Infinity}
              cursor
              cursorStyle="!"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </h3>
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
                  value={selectedSubcategory}
                  onChange={handleSubcategoryChange}
                >
                  <option value="" disabled>
                    Select Subcategory name
                  </option>
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
                  className="input  "
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
                  value={selectedRating}
                  onChange={handleRatingChange}
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
                  value={selectedCustomization}
                  onChange={handleCustomizationChange}
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
                  value={selectedStockStatus}
                  onChange={handleStockStatusChange}
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
                    Your Email
                  </span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Enter Your Email"
                  className="input  "
                  required
                  defaultValue={user.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text gradient-text font-semibold text-xl">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Your Name"
                  className="input  "
                  required
                  defaultValue={user.displayName}
                />
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
            ></textarea>
            <button
              type="submit"
              className="border text-white gradient-bg btn mt-4 w-full font-rancho text-xl  "
            >
              Add Craft
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;
