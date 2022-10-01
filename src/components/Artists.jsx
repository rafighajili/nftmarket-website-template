import { artists } from "../constants";
import { useEffect, useRef } from "react";
import { shade2 } from "../assets";

const Artists = ({ setArtists }) => {
  const ref = useRef();

  useEffect(() => {
    setArtists(ref.current);
  }, []);

  return (
    <section ref={ref} className="pt-48 relative" id="artists">
      <div className="container flex flex-col items-center">
        <h1 className="text-center">Top Creators</h1>

        <p className="text-center w-full sm:w-[600px] mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          doloremque iusto adipisci laudantium corporis tempora quasi? Vel
          perferendis nam harum. Nihil esse mollitia eos quas!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 w-full xs:w-3/4 md:w-full mt-12">
          {artists.map((artist, key) => {
            return (
              <div
                key={artist.id}
                className="bg-forItem border-2 border-forStroke rounded-lg flex flex-col items-center mb-[19px]"
                data-aos={key % 2 == 1 ? "zoom-out-up" : "zoom-out-down"}
              >
                <img
                  src={artist.photo}
                  alt={artist.id}
                  className="w-32 glow-effect mt-8"
                />

                <h2 className="tracking-wide mt-2 mb-8">{artist.name}</h2>

                <button className="bg-gradient-to-b from-primary to-secondary py-2 px-8 rounded-lg mb-[-21px]">
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <img
        src={shade2}
        className="absolute top-[-400px] right-0 h-[1200px] -z-10"
      />
    </section>
  );
};

export default Artists;
