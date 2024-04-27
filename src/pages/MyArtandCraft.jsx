import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

import MyCraftCard from "../components/MyCraftCard";

const MyArtandCraft = () => {
  const [crafts, setCrafts] = useState([]);
  const [customization, setCustomization] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `http://localhost:5000/crafts/${user.email}?customization=${customization}`
    )
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, [customization]);

  const handleCustomizationChange = (event) => {
    setCustomization(event.target.value);
  };

  return (
    <div className="container mx-auto mb-10">
      <div className="flex items-center justify-center gap-3 text-2xl md:text-5xl font-rancho font-bold mb-5">
        <h3 className="gradient-text ">My Art & </h3>
        <span className="text-teal-500 text-3xl md:text-5xl">
          <Typewriter
            cursor
            words={[" Crafts"]}
            cursorStyle="_"
            typeSpeed={100}
            loop
            deleteSpeed={70}
            delaySpeed={2000}
          />
        </span>
      </div>
      <div className="text-center mb-7">
        <p className="font-poppins font-medium">Customizable</p>
        <select
          value={customization}
          className="select select-bordered w-full max-w-xs"
          onChange={handleCustomizationChange}
        >
          <option value={""}>All types</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {crafts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crafts.map((craft) => (
            <MyCraftCard key={craft._id} craft={craft}></MyCraftCard>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-xl">You Don't Crated any Craft Items</p>
        </div>
      )}
    </div>
  );
};

export default MyArtandCraft;
