import { marketplace } from "../constants";
import { useEffect, useRef } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Marketplace = ({ setMarketplace }) => {
  const ref = useRef();

  useEffect(() => {
    setMarketplace(ref.current);
  }, []);

  return (
    <section ref={ref} className="pt-36" id="marketplace">
      <div className="container">
        <h1 className="text-center">Collect Some NFTs</h1>

        <Swiper
          modules={[Pagination]}
          spaceBetween={48}
          breakpoints={{
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          loop={true}
          pagination={{ clickable: true }}
          className="pb-16 mt-12 w-full xs:w-3/4 md:w-full"
          data-aos="zoom-in-up"
        >
          {marketplace.map((nft) => {
            return (
              <SwiperSlide key={nft.id}>
                <img src={nft.photo} alt={nft.name} />

                <div className="bg-white rounded-3xl p-5 mx-8 mb-[-90px] translate-y-[-90px]">
                  <h2 className="flex justify-between gap-x-2 flex-wrap text-black font-extrabold">
                    <span>{nft.name}</span>
                    <span>{nft.price} ETH</span>
                  </h2>

                  <div className="flex items-center gap-2 mt-2">
                    <img
                      src={nft.userPhoto}
                      alt={nft.user}
                      className="w-8 h-8"
                    />
                    <p className="font-medium text-black">{nft.user}</p>
                  </div>

                  <button className="bg-gradient-to-b from-primary to-secondary w-full rounded-lg py-2 text-white mt-4">
                    Place A Bid
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Marketplace;
