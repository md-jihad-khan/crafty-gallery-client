const CraftCategoryCard = () => {
  return (
    <div
      className="hero h-60  cursor-pointer transition-transform duration-300 transform hover:scale-105 rounded-lg"
      style={{
        backgroundImage:
          "url(https://images.prismic.io/xometry-marketing/079c0f74-1692-4d45-b1a3-34fb23ddf2b3_ceramics.jpg?auto=compress%2Cformat&fit=max&w=1000&h=743)",
      }}
    >
      <div className="hero-overlay rounded-lg bg-gradient-to-t from-gray-900  to-transparent opacity-80"></div>
      <div className="hero-content text-center text-white ">
        <div className="space-y-2 p-4">
          <h2 className="text-4xl  font-bold font-poppins">
            Ceramics & Architectural
          </h2>
          <p className="text-xs text-gray-300 font-poppins ">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CraftCategoryCard;
