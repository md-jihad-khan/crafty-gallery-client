import { useEffect, useState } from "react";
import CraftCard from "./CraftCard";
import { Typewriter } from "react-simple-typewriter";

const CraftItems = () => {
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_SERVER}crafts`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="md:my-20 my-14 container mx-auto">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 text-3xl md:text-5xl mb-2 mt-3 font-rancho font-bold">
          <h3 className="gradient-text ">Hand crafted Pottery</h3>
          <span className="text-teal-500 ">
            <Typewriter
              cursor
              words={["  and Crafts"]}
              cursorStyle="_"
              typeSpeed={100}
              loop
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </span>
        </div>
        <p className="text-xs font-extralight md:w-2/3 mx-auto text-gray-400">
          Indulge in the beauty of handmade treasures with our exquisite pottery
          and craft items. Each piece is lovingly crafted by skilled artisans,
          blending tradition with contemporary flair. From elegant pottery to
          charming crafts, our collection offers something unique for every
        </p>
      </div>
      {loading && (
        <>
          <div className="h-[60h] text-center">
            <span className="loading text-teal-500 mx-auto w-16 loading-spinner "></span>
          </div>
        </>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {crafts.map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
