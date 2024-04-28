import { Fade } from "react-awesome-reveal";
import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import CraftCategory from "../components/CraftCategory";
import CraftItems from "../components/CraftItems";
import OurTeam from "../components/OurTeam";

const Home = () => {
  return (
    <>
      <Fade>
        <Banner></Banner>
      </Fade>
      <Fade>
        <CraftItems />
      </Fade>
      <Fade>
        <CraftCategory />
      </Fade>
      <Fade>
        <OurTeam />
      </Fade>
      <Fade>
        <BlogSection />
      </Fade>
    </>
  );
};

export default Home;
