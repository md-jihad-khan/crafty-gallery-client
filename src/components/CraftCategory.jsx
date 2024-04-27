import { Typewriter } from "react-simple-typewriter";
import CraftCategoryCard from "./CraftCategoryCard";
import { useEffect, useState } from "react";

const CraftCategory = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/craftsCategory")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div className="container mx-auto mb-10">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 text-3xl md:text-5xl mb-2 mt-3 font-rancho font-bold">
          <h3 className="gradient-text ">Art & Craft </h3>
          <span className="text-teal-500 text-3xl md:text-5xl">
            <Typewriter
              cursor
              words={[" Categories "]}
              cursorStyle="_"
              typeSpeed={100}
              loop
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </span>
        </div>
        <p className="text-xs font-extralight md:w-2/3 mx-auto text-gray-400">
          Welcome to our vibrant Art and Craft category, where creativity knows
          no bounds! Explore a world of imagination and expression through an
          array of handcrafted wonders. From intricately designed pottery and
          ceramics to captivating paintings and sculptures, our collection
          celebrates the diversity of artistic expression. Dive into a realm of
          colors, textures, and techniques, where every piece tells a unique
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categorys.map((category) => (
          <CraftCategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CraftCategory;
