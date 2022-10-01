import { logo, shade3 } from "../assets";
import { socialMedias, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="pt-48 relative">
      <div className="container flex gap-x-4 gap-y-16 flex-wrap justify-between sm:px-12 pb-16">
        <div className="flex flex-col gap-5 w-[240px] xl:w-[300px] items-start">
          <img src={logo} alt="logo" className="h-9" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officia iusto ullam.
          </p>

          <div className="flex gap-3 flex-wrap">
            {socialMedias.map((socialMedia) => {
              return (
                <a
                  key={socialMedia.id}
                  href={socialMedia.link}
                  className="flex justify-center items-center w-9 h-9 rounded-full border border-forStroke duration-200 bg-forItem hover:bg-forHoveredItem"
                >
                  <img
                    src={socialMedia.icon}
                    alt={socialMedia.id}
                    className="scale-[0.8]"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex gap-y-8 gap-x-16 xl:gap-x-24 flex-wrap">
          {footerLinks.map((footerLink, key) => {
            return (
              <div key={key} className="">
                <h2>{footerLink.title}</h2>
                <ul className="mt-3 flex flex-col gap-2">
                  {footerLink.links.map((link, key) => {
                    return (
                      <li key={key}>
                        <a
                          href={link.link}
                          className="hover:text-secondary duration-200"
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t-2 border-forStroke pt-6 pb-10 text-center">
        <p className="px-4">
          © 2022 Copyright <span className="font-bold">Rafig Hajili</span>. All
          rights reserved
        </p>
      </div>

      <img
        src={shade3}
        className="absolute bottom-[calc(100%-500px)] right-0 h-[800px] -z-10"
      />
    </footer>
  );
};

export default Footer;
