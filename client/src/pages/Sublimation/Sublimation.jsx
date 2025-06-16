import React from "react";
import Hero from "../../components/Hero/Hero";
import sublimationImg from "../../assets/images/sublimation (2).webp";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";

const Sublimation = () => {
  return (
    <div>
      <Hero
        printing="Sublimation Printing in Pakistan"
        image={sublimationImg}
      />
      <div>
        <div className="px-[20px] md:px-[30px] xl:px-[55px]">
          <Heading heading="SUBLIMATION PRODUCTS" />
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Sublimation;
