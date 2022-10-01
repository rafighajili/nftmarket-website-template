import { partners } from "../constants";

const Partners = () => {
  return (
    <section className="mt-32">
      <div className="container flex justify-center lg:justify-between flex-wrap gap-8">
        {partners.map((partner) => {
          return (
            <img
              key={partner.id}
              src={partner.img}
              alt={partner.id}
              className="w-[160px] xl:w-[200px]"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
