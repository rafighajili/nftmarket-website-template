import { logo } from "../assets";
import { navLinks } from "../constants";
import { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ marketplace, artists, community }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  const nav = useRef();

  useClickOutside(nav, () => setToggle(false));

  window.addEventListener("scroll", () => {
    // scrolled navbar
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // active tab
    if (marketplace && artists && community) {
      if (window.scrollY > community.offsetTop - 100) {
        setActiveTab("community");
      } else if (window.scrollY > artists.offsetTop - 100) {
        setActiveTab("artists");
      } else if (window.scrollY > marketplace.offsetTop - 100) {
        setActiveTab("marketplace");
      } else if (window.scrollY < marketplace.offsetTop - 100) {
        setActiveTab("home");
      }
    }
  });

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <nav
      ref={nav}
      className={`fixed w-full top-0 left-0 z-50 duration-200 ${
        isScrolled && "bg-dark shadow-xl"
      }`}
    >
      <div
        className={`container relative flex items-center justify-between duration-200 ${
          isScrolled ? "py-4" : "py-8"
        }`}
      >
        <a onClick={() => window.scroll(0, 0)} className="cursor-pointer">
          <img src={logo} alt="logo" className="h-10" />
        </a>

        {windowWidth > 1024 ? (
          <>
            <ul className="flex gap-8">
              {navLinks.map((navLink) => {
                return (
                  <li key={navLink.id}>
                    <a
                      onClick={() => {
                        document
                          .getElementById(navLink.id)
                          .scrollIntoView({ block: "start" });
                      }}
                      className={`cursor-pointer duration-200 ${
                        activeTab == navLink.id
                          ? "text-secondary"
                          : "hover:text-secondary"
                      }`}
                    >
                      {navLink.title}
                    </a>
                    {activeTab == navLink.id && (
                      <div className="ellipse w-full h-[5px]"></div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex gap-4">
              <button className="bg-gradient-to-b from-primary to-secondary py-2 px-8">
                Log In
              </button>
              <button className="bg-gradient-to-b from-primary to-secondary p-0.5">
                <div className="py-[6px] px-[30px] bg-dark hover:bg-transparent duration-200">
                  Sign Up
                </div>
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              className="text-2xl cursor-pointer relative h-6 w-6"
              onClick={() => setToggle((prev) => !prev)}
            >
              <AnimatePresence>
                {toggle && (
                  <motion.div
                    transition={{ duration: 0.4 }}
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    className="absolute right-0 top-0"
                  >
                    <HiX />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {!toggle && (
                  <motion.div
                    transition={{ duration: 0.4 }}
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    className="absolute right-0 top-0"
                  >
                    <HiMenuAlt3 />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {toggle && (
                <motion.ul
                  transition={{ duration: 0.2 }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  className="flex flex-col items-center gap-4 absolute top-[calc(100%+10px)] right-0 bg-dark border-2 border-forStroke py-4 px-8 rounded-xl duration-200"
                >
                  {navLinks.map((navLink) => {
                    return (
                      <li key={navLink.id}>
                        <a
                          onClick={() => {
                            document
                              .getElementById(navLink.id)
                              .scrollIntoView({ block: "start" });
                            setToggle(false);
                          }}
                          className={`cursor-pointer duration-200 ${
                            activeTab == navLink.id
                              ? "text-secondary"
                              : "hover:text-secondary"
                          }`}
                        >
                          {navLink.title}
                        </a>
                        {activeTab == navLink.id && (
                          <div className="ellipse w-full h-[5px]"></div>
                        )}
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
