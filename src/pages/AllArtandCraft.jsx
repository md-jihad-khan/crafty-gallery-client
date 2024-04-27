import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AllArtandCraft = () => {
  const crafts = useLoaderData();
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/craft/${id}`);
  };

  return (
    <div className="container mx-auto mb-16">
      <div className="mb-7">
        <div className="flex items-center justify-center gap-3 text-2xl md:text-5xl font-rancho mb-2 mt-3  font-bold">
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
        <p className="text-xs font-extralight md:w-2/3 mx-auto text-gray-400 text-center">
          Embark on a journey through our curated collection of artisanal
          creations, where every piece tells a story of craftsmanship and
          creativity. From intricately designed ceramics to meticulously crafted
          textiles, immerse yourself in a world where artistry meets
          functionality. Browse through our diverse selection and bring home
          unique pieces that add character and charm to your space.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>View Details</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {crafts.map((craft, index) => (
              <tr key={craft._id}>
                <th>{index + 1}</th>
                <td>{craft.name}</td>
                <td>{craft.subcategory}</td>
                <td>{craft.price}</td>
                <td>
                  <Link
                    to={`/craft/${craft._id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtandCraft;
