import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading text-4xl md:text-5xl lg:text-6xl text-center w-full whitespace-nowrap">
          Excited to start <span style={{ color: "#CBACF9" }}>my journey</span> in tech!
        </h1>
        <p className="text-white-200 text-base md:text-lg md:mt-10 my-5 text-center">
          I&apos;m open to opportunities, collaborations, and learning
          experiences. Feel free to reach out—let&apos;s connect!
        </p>
        <MagicButton
          title="Let's Connect!"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => {
            window.open("mailto:ujjwalbhardwaj.2002@gmail.com", "_blank");
          }}
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-sm md:text-base md:font-normal font-light">
          Copyright © 2025 Ujjwal Bhardwaj
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a 
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="social media icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
