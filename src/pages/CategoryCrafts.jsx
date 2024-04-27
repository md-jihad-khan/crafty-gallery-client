import { useLoaderData, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import CraftCard from "../components/CraftCard";

const CategoryCrafts = () => {
  const crafts = useLoaderData();
  const params = useParams();
  const heading = decodeURIComponent(params.name);

  return (
    <div className="container mx-auto mb-16">
      <div className="mb-7">
        <div className="flex items-center justify-center gap-3 text-2xl md:text-5xl font-rancho mb-2 mt-3  font-bold">
          <h3 className="gradient-text "> {heading}</h3>
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
      </div>

      {crafts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crafts.map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
      ) : (
        <p className="font-poppins font-bold text-center md:text-2xl text-lg">
          Don't have any craft in this category
        </p>
      )}
    </div>
  );
};

export default CategoryCrafts;
