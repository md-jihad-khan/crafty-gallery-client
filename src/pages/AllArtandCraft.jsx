import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import CraftCard from "../components/CraftCard";
const AllArtandCraft = () => {
  const crafts = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="mb-7">
        <div className="flex items-center justify-center gap-3 text-3xl md:text-5xl font-rancho mb-2 mt-3  font-bold">
          <h3 className="gradient-text ">
            Discover a World of Handcrafted Art{" "}
          </h3>
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
        <p className="text-sm font-extralight md:w-2/3 mx-auto text-gray-400 text-center">
          Embark on a journey through our curated collection of artisanal
          creations, where every piece tells a story of craftsmanship and
          creativity. From intricately designed ceramics to meticulously crafted
          textiles, immerse yourself in a world where artistry meets
          functionality. Browse through our diverse selection and bring home
          unique pieces that add character and charm to your space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crafts.map((craft) => (
          <CraftCard key={craft._id} craft={craft}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default AllArtandCraft;
