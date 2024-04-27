const CraftCategoryCard = ({ category }) => {
  return (
    <div
      className="hero h-60  cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-lg"
      style={{
        backgroundImage: `url(${category.image})`,
      }}
    >
      <div className="hero-overlay rounded-lg bg-gradient-to-t from-gray-900  to-transparent opacity-80"></div>
      <div className="hero-content flex flex-col text-center text-white ">
        <h2 className="text-4xl  font-bold font-poppins">{category.name}</h2>

        <p className="text-gray-400">{category.description}</p>
      </div>
    </div>
  );
};

export default CraftCategoryCard;