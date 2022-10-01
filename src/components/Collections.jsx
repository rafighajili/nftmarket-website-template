import { collections } from "../constants";

const Collections = () => {
  return (
    <section className="pt-32">
      <div className="container flex flex-col items-center">
        <h1 className="text-center">NFTs Collections</h1>

        <p className="text-center w-full sm:w-[600px] mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quidem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-12 w-full xs:w-3/4 md:w-full">
          {collections.map((collection, key) => {
            return (
              <div
                key={collection.id}
                className="bg-forItem border-2 border-forStroke flex flex-col items-center rounded-full"
                data-aos={key % 2 == 1 ? "zoom-out-up" : "zoom-out-down"}
              >
                <div className="w-full pt-[100%] relative">
                  <img
                    src={collection.photo}
                    alt={collection.id}
                    className="absolute glow-effect w-full h-full top-0 left-0 p-6"
                  />
                </div>

                <h2 className="mt-2">Broken Collection</h2>

                <a className="cursor-pointer text-secondary hover:text-primary duration-200 mt-1 mb-16">
                  View Collection
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;
