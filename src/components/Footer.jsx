import {
  FaFacebook,
  FaInbox,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import Lottie from "lottie-react";
import leafe from "../assets/Animation - 1714111134742.json";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="flex flex-col pt-10 pb-10 md:flex-row w-4/5 mx-auto items-center">
        <div className="space-y-3 md:w-1/2">
          <Lottie className="w-8 md:w-20" animationData={leafe} loop={true} />
          <h3 className="font-rancho text-3xl font-bold gradient-text">
            Crafty Gallery
          </h3>

          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          <div className="flex gap-3 text-3xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <h3 className="font-rancho text-3xl font-bold gradient-text">
            Get in Touch
          </h3>

          <div>
            <p className="flex items-center">
              <FaPhone /> +88 01533 333 333
            </p>
            <p className="flex items-center">
              <FaInbox /> info@gmail.com
            </p>
            <p className="flex items-center">
              <FaLocationArrow /> 72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 w-full md:w-1/2"
        >
          <h3 className="font-rancho text-3xl font-bold gradient-text">
            Connect with Us
          </h3>
          <input type="text" placeholder="name" className="input" />
          <input type="text" placeholder="email" className="input" />
          <textarea
            name="message"
            placeholder="message"
            rows="5"
            className="p-2"
          ></textarea>
        </form>
      </div>

      <div className="footer footer-center p-2 font-rancho text-white gradient-bg ">
        <aside>
          <p>Copyright Crafty Gallery ! All Rights Reserved</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
