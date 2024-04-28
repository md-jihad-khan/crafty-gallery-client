import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";

const OurTeam = () => {
  return (
    <section className="py-6 ">
      <div className="container p-4 mx-auto space-y-16 sm:p-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 text-3xl md:text-5xl mb-2 mt-3 font-rancho font-bold">
            <h3 className="gradient-text ">Meet Our </h3>
            <span className="text-teal-500 text-3xl md:text-5xl">
              <Typewriter
                cursor
                words={[" Team "]}
                cursorStyle="_"
                typeSpeed={100}
                loop
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </div>
          <p className="text-xs font-extralight md:w-2/3 mx-auto text-gray-400">
            Welcome to our vibrant Art and Craft category, where creativity
            knows no bounds! Explore a world of imagination and expression
            through an array of handcrafted wonders. From intricately designed
            pottery and ceramics to captivating paintings and sculptures, our
            collection celebrates the diversity of artistic expression. Dive
            into a realm of colors, textures, and techniques, where every piece
            tells a unique
          </p>
        </div>
        <div className="flex">
          <Marquee>
            <div className="space-y-4 w-52 mr-10">
              <img
                alt=""
                className="object-cover h-56 w-full mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                src="https://plus.unsplash.com/premium_photo-1675719051566-97f16f0772f4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Jasmine</h4>
              </div>
            </div>
            <div className="space-y-4 w-52 mr-10">
              <img
                alt=""
                className="object-cover h-56 w-full mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1673252414914-1f9b250a1d88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Maya</h4>
              </div>
            </div>
            <div className="space-y-4 w-52 mr-10">
              <img
                alt=""
                className="object-cover h-56 w-full mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                src="https://images.pexels.com/photos/6611267/pexels-photo-6611267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Lucas</h4>
              </div>
            </div>
            <div className="space-y-4 w-52 mr-10">
              <img
                alt=""
                className="object-cover h-56 w-full mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                src="https://plus.unsplash.com/premium_photo-1677458719074-5e78f14e8e60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Sofia</h4>
              </div>
            </div>
            <div className="space-y-4 w-52 mr-10">
              <img
                alt=""
                className="object-cover h-56 w-full mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1673339065080-019f28818acb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Ethan</h4>
              </div>
            </div>

            <div className="space-y-4 w-52 mr-10">
              <img
                alt=""
                className="object-cover h-56 w-full mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                src="https://images.pexels.com/photos/5302902/pexels-photo-5302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
              </div>
            </div>
            <div className="space-y-4 w-52 mr-10">
              <img
                alt=""
                className="object-cover h-56 w-full mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                src="https://images.pexels.com/photos/4241343/pexels-photo-4241343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Sebastian</h4>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
