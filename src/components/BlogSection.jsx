import { Typewriter } from "react-simple-typewriter";

const BlogSection = () => {
  return (
    <section className="py-6 sm:py-12  ">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-3 text-3xl md:text-5xl mb-2 mt-3 font-rancho font-bold">
            <h3 className="gradient-text "> Ceramics & Pottery Decor</h3>
            <span className="text-teal-500 text-3xl md:text-5xl">
              <Typewriter
                cursor
                words={[" Blog "]}
                cursorStyle="_"
                typeSpeed={100}
                loop
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </div>

          <p className="text-xs font-extralight md:w-2/3 mx-auto text-gray-400 text-center">
            Welcome to Pottery Perspectives, your go-to resource for all things
            pottery! Dive into our world of clay and creativity as we share
            valuable insights, inspiring stories, and practical techniques to
            elevate your pottery experience. From expert tips and tutorials to
            behind-the-scenes studio tours and artist spotlights, our blog is
            your gateway to the vibrant and ever-evolving world of pottery.
            Whether you're a seasoned ceramic artist or a curious beginner, join
            us on this journey of exploration, learning, and inspiration. Let s
            shape clay and share stories together!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col ">
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=1569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className="flex flex-col flex-1 p-6">
              <p className="text-xs tracking-wider uppercase hover:underline text-teal-500">
                Read more
              </p>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Tips and Techniques for Stunning Pottery Surfaces
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col ">
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1620140036708-455ed5c0426a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className="flex flex-col flex-1 p-6">
              <p className="text-xs tracking-wider uppercase hover:underline text-teal-500">
                Read more
              </p>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                A Potters Journey from Clay to Creation
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col ">
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?q=80&w=1360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className="flex flex-col flex-1 p-6">
              <p className="text-xs tracking-wider uppercase hover:underline text-teal-500">
                Read more
              </p>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Exploring Pottery Traditions from Around the World
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col ">
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1523264067855-7b9941f18ca9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className="flex flex-col flex-1 p-6">
              <p className="text-xs tracking-wider uppercase hover:underline text-teal-500">
                Read more
              </p>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Insider Tips for Setting Up Your Pottery Exhibition
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
