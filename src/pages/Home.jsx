import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import CraftCategory from "../components/CraftCategory";
import CraftItems from "../components/CraftItems";
import OurTeam from "../components/OurTeam";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <CraftItems />
      <CraftCategory />
      <OurTeam />
      <BlogSection />
    </>
  );
};

export default Home;
