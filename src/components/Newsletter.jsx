import { useEffect, useRef } from "react";
import { NewsletterImg, pattern } from "../assets";

const Newsletter = ({ setCommunity }) => {
  const ref = useRef();

  useEffect(() => {
    setCommunity(ref.current);
  }, []);

  return (
    <section ref={ref} className="pt-32 relative" id="community">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="w-full xs:w-3/4 lg:w-full">
          <img
            src={NewsletterImg}
            className="rotate-[15deg] scale-75 my-[-5%]"
          />
        </div>

        <div
          className="flex flex-col gap-4 sm:gap-8 lg:pr-[80px] mt-[-60px] sm:mt-[-80px] lg:mt-0 z-20"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <h1 className="leading-tight">
            Subscribe And Get Latest News Update About NFTs.
          </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            repellendus nam veniam sed tempora, soluta, vel error dicta
            voluptates eos porro quia impedit placeat ipsam.
          </p>

          <div className="relative">
            <input
              type="text"
              className="py-4 xs:py-5 pl-4 xs:pl-8 pr-36 xs:pr-44 w-full outline-none bg-forItem border-2 border-forStroke rounded-lg"
              placeholder="Write your email here"
            />
            <button className="bg-gradient-to-b from-primary to-secondary py-2 px-4 xs:py-3 xs:px-8 absolute top-1/2 -translate-y-1/2 right-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <img
        src={pattern}
        className="absolute top-[45%] sm:top-[50%] lg:top-auto lg:bottom-[-20%] left-0 w-[50%] xs:w-[35%] lg:w-[25%] z-10"
      />
    </section>
  );
};

export default Newsletter;
