import { HomeImg, shade1 } from "../assets";

const Home = () => {
  return (
    <section className="pt-32 relative" id="home">
      <div className="container xl:pl-[60px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
        <div className="flex flex-col gap-2 xs:gap-4 sm:gap-8 order-last lg:order-first">
          <span className="text-4xl xs:text-6xl sm:text-7xl font-black leading-tight bg-[url(./assets/home-text-bg.png)] bg-cover bg-clip-text text-transparent">
            Best NFTs <br /> Marketplace.
          </span>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod
            molestiae eos optio, quae, et iste magnam maiores possimus tempore
            iure aspernatur autem, quo neque.
          </p>

          <div className="flex gap-4">
            <button
              className="bg-gradient-to-b from-primary to-secondary py-2 px-8"
              onClick={() => {
                console.log(document.getElementById("home").offsetTop);
                console.log(document.getElementById("marketplace").offsetTop);
                console.log(document.getElementById("artists").offsetTop);
                console.log(document.getElementById("community").offsetTop);
              }}
            >
              Get Started
            </button>
            <button className="bg-gradient-to-b from-primary to-secondary p-0.5">
              <div className="py-[6px] px-[30px] bg-dark hover:bg-transparent duration-200">
                Create NFTs
              </div>
            </button>
          </div>
        </div>

        <img
          src={HomeImg}
          alt="Skeleton Head"
          className="w-full xs:w-3/4 lg:w-full ml-[50%] -translate-x-1/2"
        />
      </div>

      <img
        src={shade1}
        className="absolute top-[calc(100%-800px)] left-0 h-[1600px] -z-10"
      />
    </section>
  );
};

export default Home;
