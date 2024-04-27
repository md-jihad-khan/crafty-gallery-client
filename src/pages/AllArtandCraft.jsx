import { useLoaderData } from "react-router-dom";

const AllArtandCraft = () => {
  const crafts = useLoaderData();

  return (
    <div className="container mx-auto">
      <p>{crafts.length}</p>
    </div>
  );
};

export default AllArtandCraft;
