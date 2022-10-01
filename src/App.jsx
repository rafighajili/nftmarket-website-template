import {
  Navbar,
  Home,
  Partners,
  Marketplace,
  Artists,
  Newsletter,
  Collections,
  Footer,
} from "./components";
import { useState, useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [marketplace, setMarketplace] = useState();
  const [artists, setArtists] = useState();
  const [community, setCommunity] = useState();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar
        marketplace={marketplace}
        artists={artists}
        community={community}
      />
      <Home />
      <Partners />
      <Marketplace setMarketplace={setMarketplace} />
      <Artists setArtists={setArtists} />
      <Newsletter setCommunity={setCommunity} />
      <Collections />
      <Footer />
    </div>
  );
};

export default App;
